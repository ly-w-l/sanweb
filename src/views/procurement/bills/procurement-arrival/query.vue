<template>
  <bill-query billTitle="采购到货" />
</template>
<script>
import billQuery from "../../components/bill-query";
export default {
  provide: {
    billName: "arrival"
  },
  components: {
    billQuery
  }
};
</script>