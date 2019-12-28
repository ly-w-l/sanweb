<template>
  <bill-query billTitle="采购申请单" />
</template>
<script>
import billQuery from "../../components/bill-query";
export default {
  provide: {
    billName: "request"
  },
  components: {
    billQuery
  }
};
</script>