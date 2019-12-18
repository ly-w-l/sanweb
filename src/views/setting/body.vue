<template>
  <gl-bill-structure BillType="单据">
    <template v-slot:btn>
      <gl-button :btnTexts="btnTexts" @btnSave="save"></gl-button>
    </template>
    <template v-slot:table>
      <gl-table
        :columns="options"
        :data="tableData"
        v-loading="loading"
        :edit="true"
      ></gl-table>
    </template>
  </gl-bill-structure>
  <!-- <el-table :data="tableData" height="600px" border style="width: 100%">
    <el-table-column prop="FID" label="FID"> </el-table-column>
    <el-table-column prop="FCaption" label="表名描述"> </el-table-column>
    <el-table-column prop="FTableName" label="表名"> </el-table-column>
    <el-table-column prop="FFieldName" label="字段"> </el-table-column>
    <el-table-column prop="FKeyField" label="对应ID字段"> </el-table-column>
    <el-table-column prop="FRefField" label="档案引用字段"> </el-table-column>
    <el-table-column prop="FDisplayName" label="显示中文名"> </el-table-column>
    <el-table-column prop="FFieldWidth" label="字段宽度"> </el-table-column>
    <el-table-column prop="FOrderNo" label="字段顺序"> </el-table-column>
    <el-table-column prop="IsEnabled" label="是否启用"> </el-table-column>
    <el-table-column prop="IsVisible" label="是否显示在页面上">
    </el-table-column>
    <el-table-column prop="IsRequired" label="是否必填"> </el-table-column>
    <el-table-column prop="IsReadOnly" label="是否只读"> </el-table-column>
    <el-table-column prop="IsSummary" label="是否合计"> </el-table-column>
    <el-table-column prop="FDisplayType" label="用于显示的组件类型">
    </el-table-column>
    <el-table-column prop="FDataSourceKey" label="组件数据源标识">
    </el-table-column>
    <el-table-column prop="FDefaultData" label="组件默认值"> </el-table-column>
    <el-table-column prop="FValidType" label="输入规则验证"> </el-table-column>
  </el-table> -->
</template>

<script>
import { getUiConfig } from "@/api/uiConfig";
export default {
  data() {
    return {
      name: "headerSetting",
      loading: true,
      btnTexts: ["保存"],
      tableData: [],
      options: [
        {
          label: "FID",
          prop: "FID",
          innerInput: [{ $type: "input", $id: "FID" }]
        },
        {
          prop: "FCaption",
          label: "表名描述",
          innerInput: [{ $type: "input", $id: "FCaption" }]
        },

        {
          prop: "FTableName",
          label: "表名",
          innerInput: [{ $type: "input", $id: "FTableName" }]
        },
        {
          prop: "FFieldName",
          label: "字段",
          innerInput: [{ $type: "input", $id: "FFieldName" }]
        },
        {
          prop: "FKeyField",
          label: "对应ID字段",
          innerInput: [{ $type: "input", $id: "FKeyField" }]
        },
        {
          prop: "FRefField",
          label: "档案引用字段",
          innerInput: [{ $type: "input", $id: "FRefField" }]
        },
        {
          prop: "FDisplayName",
          label: "显示中文名",
          innerInput: [{ $type: "input", $id: "FDisplayName" }]
        },
        {
          prop: "FFieldWidth",
          label: "字段宽度",
          innerInput: [{ $type: "input", $id: "FFieldWidth" }]
        },
        {
          prop: "FOrderNo",
          label: "字段顺序",
          innerInput: [{ $type: "input", $id: "FOrderNo" }]
        },
        {
          prop: "IsEnabled",
          label: "是否启用",
          innerInput: [{ $type: "checkbox", $id: "IsEnabled" }]
        },
        {
          prop: "IsVisible",
          label: "是否显示在页面上",
          innerInput: [{ $type: "checkbox", $id: "IsVisible" }]
        },
        {
          prop: "IsRequired",
          label: "是否必填",
          innerInput: [{ $type: "checkbox", $id: "IsRequired" }]
        },
        {
          prop: "IsReadOnly",
          label: "是否只读",
          innerInput: [{ $type: "checkbox", $id: "IsReadOnly" }]
        },
        {
          prop: "IsSummary",
          label: "是否合计",
          innerInput: [{ $type: "checkbox", $id: "IsSummary" }]
        },
        {
          prop: "FDisplayType",
          label: "用于显示的组件类型",
          innerInput: [{ $type: "input", $id: "FDisplayType" }]
        },
        {
          prop: "FDataSourceKey",
          label: "组件数据源标识",
          innerInput: [{ $type: "input", $id: "FDataSourceKey" }]
        },
        {
          prop: "FDefaultData",
          label: "组件默认值",
          innerInput: [{ $type: "input", $id: "FDefaultData" }]
        },
        {
          prop: "FValidType",
          label: "输入规则验证",
          innerInput: [{ $type: "input", $id: "FValidType" }]
        }
      ]
    };
  },
  inject: ["billName"],
  computed: {
    pageSetting() {
      return this.$store.getters.pageSetting(this.billName);
    }
  },
  mounted() {
    getUiConfig({
      FID: this.pageSetting.FID,
      fTableName: this.pageSetting.body[0].FTableName
    }).then(res => {
      // console.log(res.data);
      this.tableData = res.data;
      this.loading = false;
    });
    console.log(this.pageSetting);
  },
  methods: {
    save() {}
  }
};
</script>