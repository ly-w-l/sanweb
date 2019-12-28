<template>
  <el-table
    :data="data"
    border
    @cell-click="cellclick"
    :show-summary="IsSummary"
    height="500px"
    highlight-current-row
    @current-change="currentChange"
  >
    <el-table-column
      v-for="item in columns"
      :key="item.label"
      :label="item.label"
      :prop="item.prop"
      :width="item.width"
    >
      <template slot-scope="scope">
        <gl-form
          v-show="scope.row === currentRow && scope.column === currentColumn"
          :content="item.innerInput"
          :disabled="item.disabled"
          :_default="scope.row[item.prop]"
          :inputValue="
            scope.row === currentRow && scope.column === currentColumn
          "
          @update:inputValue="
            r => {
              scope.row[item.prop] = r[item.prop];
            }
          "
        ></gl-form>
        <span
          v-show="!(scope.row === currentRow && scope.column === currentColumn)"
          >{{ scope.row[item.prop] }}</span
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import glForm from "./gl-table-inner-input/GlobalForm";
// import { compare } from "@/utils";
export default {
  name: "GlTable",
  data() {
    return {
      currentRow: "",
      currentColumn: "",
      tableDataclone: this.data // 传入表格对象比对模型
      // tableDataChange: [] // 表格改变内容
    };
  },
  components: {
    glForm
  },
  props: {
    data: Array,
    columns: Array,
    edit: { type: Boolean, default: false }
  },
  computed: {
    IsSummary() {
      return this.columns.some(el => el.IsSummary);
    }
  },
  // watch: {
  //   data: {
  //     handler(newV) {
  //       this.getChanges(newV);
  //       console.log(newV);
  //       this.tableDataclone = JSON.parse(JSON.stringify(newV));
  //     },
  //     deep: true
  //   }
  // },
  // mounted() {
  //   // this.test = this.data;
  //   let a = ["2", { i: "3", o: "4" }];
  //   let b = JSON.parse(JSON.stringify(a));

  //   b[1].i = "4";
  //   console.log(a[1], b[1], a[1] == b[1], compare(b[1], a[1]));
  // },
  methods: {
    cellclick(r, c) {
      if (!this.edit) return;
      this.currentRow = r;
      this.currentColumn = c;
      // console.log(r, c);
    },
    // 暂时没用到
    currentChange(newR, oldR) {
      this.$emit("currentChang", newR);
    },
    endEdit() {
      this.currentRow = "";
      this.currentColumn = "";
    },
    // changCompareModule() {},
    getDeleteRows() {
      return this.tableDataclone.map(el => {
        if (this.data.indexOf(el) === -1) {
          el.EntryState = 3; // 给后台传增删改标识 3删除
          return el;
        }
      });

      // return data.map(el => Object.assign({}, el));
    }
  }
};
</script>