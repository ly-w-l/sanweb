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
      jiao
    </template>
  </gl-bill-structure>
</template>
<script>
export default {
  name: "record",
  data() {
    return {
      type: "单据",
      dd: process.env.VUE_APP_ADD
    };
  }
};
</script>
