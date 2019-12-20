<template>
  <record billTitle="职员档案"> </record>
</template>
<script>
import { billQueryMixin } from "./mixins";
export default {
  mixins: [billQueryMixin],
  provide: {
    billName: "employee" // 获取页面配置信息的具体标识
  }
};
</script>
