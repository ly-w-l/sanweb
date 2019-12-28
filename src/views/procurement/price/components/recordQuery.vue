<template>
  <gl-bill-structure BillType="档案">
    <template v-slot:btn>
      <gl-button
        :btnTexts="btnTexts"
        @btnAdd="add"
        @btnEdit="edit"
        @btnDelete="btnDelete"
      >
      </gl-button>
    </template>
    <template v-slot:form>
      <form-render
        :content="pageSetting.query.formOptions"
        ref="glform"
        :inline="true"
      >
        <el-form-item>
          <el-button
            type="primary"
            size="mini"
            :loading="btnLoading"
            @click="query"
            >查询</el-button
          >
        </el-form-item>
      </form-render>
    </template>
    <template v-slot:aside>
      <el-tree
        :data="treedata"
        :props="treedefaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </template>
    <template v-slot:table>
      <el-table
        :data="tableData"
        v-loading="tableLoading"
        height="500px"
        border
        useVirtual
        highlight-current-row
        @current-change="currentChange"
      >
        <el-table-column
          v-for="item in columns"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
        ></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[20, 50, 500, 10000]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <el-dialog
        v-if="dialogVisible"
        :title="$attrs.billTitle"
        :visible.sync="dialogVisible"
        fullscreen
        :destroy-on-close="true"
      >
        <recordAdd
          :FItemID="FItemID"
          :pageSetting="pageSetting"
          :api="api"
        ></recordAdd>
      </el-dialog>
    </template>
  </gl-bill-structure>
</template>
<script>
import formRender from "@/components/globalComponents/form-render";
import { procurementApi, getTreeList } from "@/api/record/index.js";
import recordAdd from "./recordAdd";
import { getUiConfig } from "@/api/uiConfig";
import { isObject, createColumnsOptions } from "@/utils";
export default {
  data() {
    return {
      dialogVisible: false,
      btnLoading: false,
      tableLoading: false,
      btnTexts: ["新增", "编辑", "删除", "设置"],
      total: 0,
      pageSize: 20,
      currentPage: 1,
      treedata: [],
      tableData: [],
      treedefaultProps: {
        children: "children",
        label: "FName"
      },

      columns: [],
      currentRow: "",
      FItemID: ""
    };
  },
  inject: ["billName"],
  computed: {
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
  components: {
    formRender,
    recordAdd
  },
  created() {
    this.columnsHandler();
    this.getTreeList();
    // console.log(this.$attrs);
  },

  methods: {
    //生成需要提交的conditions
    arrayHandler(formData, formOptions, Isalike = false) {
      return Object.entries(formData)
        .filter(el => !isObject(el[1]) && el[1] !== "")
        .map(el => {
          let data = {};
          formOptions.forEach(item => {
            if (el[0] === item.$id) {
              Isalike
                ? (data.Name = el[0].substring(0, el[0].length - 1))
                : (data.Name = el[0]);
              data.Type = item.$operator;
              data.Value = el[1];
            }
          });
          return data;
        });
    },
    //formOptions 里会有group类型的input，也就是多维的数据，这里做一下降维处理，方便配合生成提交的conditions
    reduction(data) {
      if (Array.isArray(data)) {
        return data
          .filter(el => el.$items)
          .reduce((accumulator, currentValue) => {
            return accumulator.concat(currentValue.$items);
          }, []);
      } else if (isObject(data)) {
        let newData = {};
        Object.entries(data).forEach(el => {
          if (isObject(el[1])) {
            newData = Object.assign(newData, el[1]);
          }
        });
        return newData;
      }
    },
    query() {
      this.btnLoading = true;
      // this.$emit("update:btnLoading", true);
      let formData = this.$refs.glform.getFormValue();
      let formOptions = this.pageSetting.formOptions;
      let _formData = this.reduction(formData);
      let _formOptions = this.reduction(formOptions);
      let conditions = this.arrayHandler(formData, formOptions).concat(
        this.arrayHandler(_formData, _formOptions, true)
      );

      this.getTableDataRequest(conditions);
    },
    //根据配置生成列头
    columnsHandler() {
      getUiConfig({
        FID: this.pageSetting.FID,
        fTableName: this.pageSetting.query.body[0].FTableName
      }).then(res => {
        this.columns = createColumnsOptions(res.data);
      });
    },
    //获取左侧树
    getTreeList() {
      getTreeList({ fItemClassId: this.pageSetting.FItemClassID }).then(res => {
        this.treedata = res.data;
      });
    },
    handleNodeClick(data) {
      // console.log(data);
      let { FItemID } = data;
      let conditions = [
        {
          name: "FParentID",
          type: "=",
          value: FItemID
        }
      ];
      this.getTableDataRequest(conditions);
    },
    handleCurrentChange(value) {
      this.currentPage = value;

      this.query();
    },
    handleSizeChange(value) {
      this.pageSize = value;

      // this.query(this.formData);
    },
    getTableDataRequest(conditions) {
      let commitData = {
        pageSize: this.pageSize,
        pageNumber: this.currentPage,
        conditions
      };
      // this.$emit("update:tableLoading", true);
      this.tableLoading = true;
      this.api.GetPageList(commitData).then(res => {
        this.total = res.data.total;
        this.tableData = Object.freeze(res.data.rows);
        this.btnLoading = false;
        this.tableLoading = false;
      });
      // this.$emit("query", commitData);
    },
    currentChange(row) {
      console.log(row);
      this.currentRow = row;
    },
    add() {
      this.FItemID = "";
      this.dialogVisible = true;
      // let data = this.$refs.glform.getFormValue();
      // console.log(data);
    },
    edit() {
      if (!this.currentRow) {
        this.$message({
          message: "请选择一条数据",
          type: "warning"
        });
        return;
      }
      let { FItemID } = this.currentRow;
      this.FItemID = FItemID;
      this.dialogVisible = true;
    },
    btnDelete() {
      // console.log(this.currentRow);
      if (!this.currentRow) {
        this.$message({
          message: "请选择一条数据",
          type: "warning"
        });
        return;
      }
      let { FItemID } = this.currentRow;
      this.$confirm("是否删除该条数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.api.Delete({ FItemID }).then(res => {
            if (res.data) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.query();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

      // this.$emit("delete", FItemID);
    }
  }
};
</script>
