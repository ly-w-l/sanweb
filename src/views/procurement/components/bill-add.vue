<template>
  <gl-bill-structure BillType="单据">
    <template v-slot:btn>
      <gl-button
        :btnTexts="btnTexts"
        :needStatus="true"
        :billStatus="billStatus"
        @btnAdd="add"
        @btnEdit="edit"
        @btnSave="save"
        @btnAddRow="addRow"
        @btnDeleteRow="deleteRow"
      >
      </gl-button>
    </template>
    <template v-slot:form>
      <form-render
        :content="content"
        ref="glform"
        :inline="true"
        :disabled="disabled"
      >
      </form-render>
    </template>
    <template v-slot:table>
      <el-tabs v-model="currentTab" type="card" @tab-click="tabClick">
        <el-tab-pane
          v-for="item in pageSetting.add.body"
          :key="item.title"
          :label="item.title"
          :name="item.name"
        >
          <gl-table
            :data="item.tableData"
            :columns="item.columns"
            :edit="!disabled"
            ref="gltable"
            @currentChang="currentRowChang"
          ></gl-table>
        </el-tab-pane>
      </el-tabs>
    </template>
  </gl-bill-structure>
</template>
<script>
import formRender from "@/components/globalComponents/form-render";
import {
  filterEmptyCommitData,
  createFormOptions,
  createColumnsOptions
} from "@/utils";
import { procurementApi } from "@/api/procurement";
import { getUiConfig } from "@/api/uiConfig";
export default {
  data() {
    return {
      currentTab: "Entries",
      btnTexts: ["新增", "编辑", "保存", "审核", "反审", "增行", "删行"],
      content: [],
      currentRow: "",
      // deleteRowStack: [],
      billStatus: process.env.VUE_APP_ADD
    };
  },
  inject: ["billName"],
  computed: {
    disabled() {
      if (
        this.billStatus === process.env.VUE_APP_ADD ||
        this.billStatus === process.env.VUE_APP_EDIT
      ) {
        return false;
      } else {
        return true;
      }
    },
    pageSetting() {
      return this.$store.getters.procurementSetting(this.billName);
    },
    api() {
      let data = Object.entries(procurementApi).filter(
        el => el[0] === this.billName
      );
      return data[0][1];
    }
  },
  props: {
    FInterID: {
      type: Number,
      default: 0
    }
  },
  components: {
    formRender
  },
  created() {
    this.handler();
  },
  methods: {
    async handler() {
      await this.formHandler();
      await this.tableHandler();
      this.comfirmStatus();
    },
    // 根据传入的FInterID请求数据
    comfirmStatus() {
      if (this.FInterID) {
        this.api.Get({ fInterID: this.FInterID }).then(res => {
          // console.log(res.data);

          Object.entries(res.data).forEach(el => {
            
            if (Array.isArray(el[1])) {
              // 加载表体
              this.pageSetting.add.body.forEach(item => {
                if (item.name === el[0]) item.tableData = el[1];
              });
            } else {
              // 加载表头
              this.$refs.glform.updateValue({ id: el[0], value: el[1] });
            }
          });
          this.billStatus = process.env.VUE_APP_BROWSE;
        });
      } else {
        // 清空表体数据
        this.pageSetting.add.body.forEach(el => {
          el.tableData = [];
        });
        this.billStatus = process.env.VUE_APP_ADD;
      }
    },
    // 根据配置生成表单
    formHandler() {
      return new Promise((resolve, reject) => {
        getUiConfig({
          FID: this.pageSetting.FID,
          fTableName: this.pageSetting.add.header.FTableName
        }).then(res => {
          this.content = createFormOptions(res.data);
          resolve();
        });
      });
    },
    // 根据配置生成表格数据
    tableHandler() {
      let requestArray = this.pageSetting.add.body.map(el => {
        return getUiConfig({
          FID: this.pageSetting.FID,
          fTableName: el.FTableName
        });
      });
      return Promise.all(requestArray).then(res => {
        this.$store.getters
          .procurementSetting(this.billName)
          .add.body.forEach((el, index) => {
            el.columns = createColumnsOptions(
              res.map(el => el.data)[index],
              true
            );
          });
      });
    },
    add() {
      this.$refs.glform.resetFields();
      this.pageSetting.add.body.forEach(el => {
        el.tableData = [];
      });
      this.billStatus = process.env.VUE_APP_ADD;
    },
    edit() {
      this.billStatus = process.env.VUE_APP_EDIT;
    },
    save() {
      this.$refs.glform.validate(valid => {
        if (valid) {
          this.$refs.gltable.forEach(el => {
            el.endEdit();
          });
          let request;
          this.billStatus === process.env.VUE_APP_ADD
            ? (request = this.api.Add)
            : (request = this.api.Update);
          let commitData = filterEmptyCommitData(
            this.$refs.glform.getFormValue()
          );
          // 收集子表
          let childDatas = Object.fromEntries(
            this.pageSetting.add.body.map((el, index) => {
              el.tableData.forEach(item => {
                if (!item.hasOwnProperty("EntryState")) {
                  item.EntryState = 2; // 给后台传增删改标识 2修改 ，这里只能给所有不是新增和删除的加修改标识
                }
              });

              if (this.billStatus === process.env.VUE_APP_EDIT) {
                let deleteRows = this.$refs.gltable[index].getDeleteRows();
                return [el.name, el.tableData.concat(deleteRows)];
              }
              return [el.name, el.tableData];
            })
          );
          // console.log(childDatas);
          request(Object.assign(commitData, childDatas)).then(res => {
            if (res) {
              this.comfirmStatus();
            }
          });
        } else {
          return false;
        }
      });
    },
    addRow() {
      let tab = this.pageSetting.add.body.find(
        el => el.name === this.currentTab
      );
      if (
        !tab.tableData.length ||
        Object.entries(tab.tableData[tab.tableData.length - 1]).some(
          el => el[1]
        )
      ) {
        this.$refs.gltable.forEach(el => {
          el.endEdit();
        });
        let newRow = Object.fromEntries(tab.columns.map(el => [el.prop, ""]));
        if (this.billStatus === process.env.VUE_APP_EDIT) newRow.EntryState = 1; // 给后台传增删改标识 1新增
        tab.tableData.push(newRow);
      }
    },
    deleteRow() {
      let tab = this.pageSetting.add.body.find(
        el => el.name === this.currentTab
      );
      if (!this.currentRow) {
        this.$message({
          showClose: true,
          message: "请选择一条数据",
          type: "warning"
        });
        return;
      }
      if (tab.tableData.length !== 0) {
        let index = tab.tableData.indexOf(this.currentRow);
        tab.tableData.splice(index, 1);
      }
    },
    tabClick(tab) {
      this.currentTab = tab.name;
    },
    currentRowChang(newR) {
      this.currentRow = newR;
    }
  }
};
</script>