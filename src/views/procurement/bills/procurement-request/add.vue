<template>
  <bill-add />
</template>
<script>
import billAdd from "../../components/bill-add";
export default {
  provide: {
    billName: "request"
  },
  components: {
    billAdd
  }
};
</script>