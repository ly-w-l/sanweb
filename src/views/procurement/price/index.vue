<template>
  <record billTitle="供应商价格"> </record>
</template>
<script>
import record from "./components/recordQuery";
export default {
  provide: {
    billName: "price" // 获取页面配置信息的具体标识
  },
  components: {
    record
  }
};
</script>
