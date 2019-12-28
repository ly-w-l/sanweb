<template>
  <bill-query />
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