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
          v-if="item.innerInput"
          v-show="scope.row === currentRow && scope.column === currentColumn"
          :content="item.innerInput"
          :disabled="item.disabled"
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
export default {
  name: "GlTable",
  data() {
    return {
      currentRow: "",
      currentColumn: ""
    };
  },
  filters: {
    capitalize: function(value, content) {
      let [data] = value;
      data.$default = content;
      return [data];
    }
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
  methods: {
    cellclick(r, c) {
      if (!this.edit) return;
      this.currentRow = r;
      this.currentColumn = c;
      // console.log(r, c);
    },
    currentChange(newR, oldR) {
      this.$emit("currentChang", newR);
    }
  }
};
</script>