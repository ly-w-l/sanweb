<template>
  <record
    :btnLoading.sync="btnLoading"
    :tableLoading.sync="tableLoading"
    @query="query"
    @delete="deleteRow"
    :total="total"
    :tableData="tabaleData"
  ></record>
</template>
<script>
import { getStockRecord, deleteStock } from "@/api/record";
import { billQueryMixin } from "../mixins";
export default {
  mixins: [billQueryMixin],
  provide: {
    billName: "仓库档案" // 获取页面配置信息的具体标识
  },
  methods: {
    query(data) {
      this.queryConditions = data;
      this.queryHandler(getStockRecord(data));
    },
    deleteRow(fItemId) {
      this.deleteHandler(deleteStock({ fItemId }));
    }
  }
};
</script>
