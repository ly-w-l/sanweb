<template>
  <bill-query billTitle="采购发票" />
</template>
<script>
import billQuery from "../../components/bill-query";
export default {
  provide: {
    billName: "invoice"
  },
  components: {
    billQuery
  }
};
</script>