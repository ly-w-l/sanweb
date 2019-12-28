<template>
  <bill-query billTitle="采购订单" />
</template>
<script>
import billQuery from "../../components/bill-query";
export default {
  provide: {
    billName: "order"
  },
  components: {
    billQuery
  }
};
</script>