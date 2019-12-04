<template>
  <el-table :data="tableData" height="600px" border style="width: 100%">
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
  </el-table>
</template>

<script>
import { getUiConfig } from "@/api/uiConfig";
export default {
  data() {
    return {
      name: "headerSetting",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  mounted() {
    getUiConfig().then(res => {
      console.log(res.data);
      this.tableData = Object.freeze(res.data);
    });
  }
};
</script>