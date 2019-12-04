<template>
  <gl-bill-structure :BillType="type" style="color:red">
    <template v-slot:btn>
      <el-button-group>
        <el-button>ddd</el-button>
        <el-dropdown>
          <el-button>
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>
    </template>
    <template v-slot:form>
      {{ dd }}
    </template>
    <template v-slot:table>
      <gl-table
        :options="options"
        :data="tableData"
        @cell-click="click"
      ></gl-table>
    </template>
  </gl-bill-structure>
</template>
<script>
export default {
  name: "record",
  data() {
    return {
      type: "单据",
      dd: process.env.VUE_APP_ADD,
      options: [
        { border: true, height: "500px" },
        { prop: "date", label: "日期" },
        [
          "配送信息",
          { label: "姓名", prop: "name" },
          [
            "地址",
            { label: "省份", prop: "province" },
            { label: "城市", prop: "city" },
            { label: "地址", prop: "address" },
            { label: "邮编", prop: "zip" }
          ]
        ]
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  mounted() {
    // let a = { b: "dd", c: { ss: 6, cc: 7 } };
    // let c = a;
    // c.b = 999;
    // console.log(a);
    // console.log(c);
  },
  methods: {
    click(row, column, cell, event) {
      console.log(row, column, cell, event.target);
    }
  }
};
</script>
