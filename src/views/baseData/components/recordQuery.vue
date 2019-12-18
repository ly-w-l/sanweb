<template>
  <gl-bill-structure BillType="档案" style="color:red">
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
        :content="pageSetting.formOptions"
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
      <gl-table
        :data="tableData"
        :columns="columns"
        v-loading="tableLoading"
        @currentChang="currentChange"
      ></gl-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[20, 50, 200, 500]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <el-dialog
        v-if="dialogVisible"
        :title="billName"
        :visible.sync="dialogVisible"
        fullscreen
        :destroy-on-close="true"
      >
        <record-add :pageSetting="pageSetting" :FItmeID="FItmeID"></record-add>
      </el-dialog>
    </template>
  </gl-bill-structure>
</template>
<script>
import formRender from "@/components/globalComponents/form-render";
import recordAdd from "./recordAdd";
import { getTreeList } from "@/api/record";
import { getUiConfig } from "@/api/uiConfig";
import { isObject } from "@/components/globalComponents/form-render/utils.js";
export default {
  data() {
    return {
      dialogVisible: false,
      btnTexts: ["新增", "编辑", "删除", "设置"],
      // total: 81,
      pageSize: 20,
      currentPage: 1,
      treedata: [],
      treedefaultProps: {
        children: "children",
        label: "FName"
      },
      // tableData: [],
      columns: [
        {
          prop: "date",
          label: "日期",
          innerInput: [{ $type: "input", $id: "date" }],
          disabled: false
        },
        {
          prop: "name",
          label: "姓名",
          innerInput: [{ $type: "input", $id: "name" }],
          disabled: false
        },
        {
          prop: "address",
          label: "地址",
          innerInput: [{ $type: "input", $id: "address" }],
          disabled: false
        }
      ],
      currentRow: "",
      FItmeID: ""
    };
  },
  inject: ["billName"],
  props: {
    btnLoading: Boolean,
    tableLoading: Boolean,
    total: Number,
    tableData: {
      type: Array,
      required: true
    }
  },
  computed: {
    pageSetting() {
      return this.$store.getters.pageSetting(this.billName);
    }
    // tableData() {
    //   return this.$store.getters.pageSetting(this.billName).tableData;
    // }
  },
  components: {
    formRender,
    recordAdd
  },
  created() {
    this.columnsHandler();
    this.getTreeList();
  },
  mounted() {
    // console.log(this.$store.getters.pageSetting(this.billName));
    // debugger;
    // this.pageSetting.FID = 1;
    // console.log(this.$store.getters.pageSetting(this.billName));
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
      this.$emit("update:btnLoading", true);
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
        fTableName: this.pageSetting.body[0].FTableName
      }).then(res => {
        // console.log(res.data);
        let data = res.data
          .filter(el => el.IsEnabled) //过滤未创建
          .sort((a, b) => a.FOrderNo - b.FOrderNo) //排序
          .map(el => {
            let columns = {};
            columns.prop = el.FFieldName; //字段
            columns.label = el.FDisplayName; //中文名
            columns.IsSummary = el.IsSummary; //合计
            columns.width = el.FFieldWidth; //列宽
            return columns;
          });
        this.columns = data;
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
      this.$emit("update:tableLoading", true);
      this.$emit("query", commitData);
    },
    currentChange(row) {
      // console.log(row);
      this.currentRow = row;
    },
    add() {
      this.FItmeID = "";
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
      this.FItmeID = FItemID;
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
      this.$emit("delete", FItemID);
    }
  }
};
</script>
