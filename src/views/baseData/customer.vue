<template>
  <record billTitle="客户档案"> </record>
</template>
<script>
import { billQueryMixin } from "./mixins";
export default {
  mixins: [billQueryMixin],
  provide: {
    billName: "customer" // 获取页面配置信息的具体标识
  }
};
</script>
