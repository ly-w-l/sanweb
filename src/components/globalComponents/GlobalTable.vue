<script>
//传入的options模型 第一条数据是table的配置
// const module =  options: [
//   { border: true, height: "500px" },//table设置
//   { prop: "date", label: "日期" },//column设置
//   [
//     "配送信息",
//     { label: "姓名", prop: "name" },
//     [
//       "地址",
//       { label: "省份", prop: "province" },
//       { label: "城市", prop: "city" },
//       { label: "地址", prop: "address" },
//       { label: "邮编", prop: "zip" }
//     ]
//   ]
// ]
import { isObject } from "./form-render/utils";
export default {
  name: "GlTable",
  render(h) {
    return h(
      "el-table",
      {
        attrs: { ...this.options[0], data: this.data },
        on: this.$listeners,
        ref: "table"
      },
      this.tableColumnRender(h)
    );
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    data: Array
  },
  methods: {
    //表格列渲染函数
    tableColumnRender(h) {
      let [talbleOptions, ...data] = this.options;
      return this.handler(data, h);
    },
    handler(data, h) {
      return data.map(el => {
        if (Array.isArray(el)) {
          return h(
            "el-table-column",
            { attrs: { label: el[0] } },
            this.handler(el, h)
          );
        } else if (isObject(el)) {
          return h("el-table-column", { attrs: { ...el } });
        }
      });
    }
  },
  mounted() {
    console.log(this.options[0]);
  }
};
</script>
