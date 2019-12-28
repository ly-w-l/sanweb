<template>
  <bill-query billTitle="采购退货单" />
</template>
<script>
import billQuery from "../../components/bill-query";
export default {
  provide: {
    billName: "ICInOutStock"
  },
  components: {
    billQuery
  }
};
</script>