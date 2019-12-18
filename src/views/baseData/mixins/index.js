import record from "../components/recordQuery";
export const billQueryMixin = {
  data() {
    return {
      btnLoading: false,
      tableLoading: false,
      total: 0,
      tabaleData: [],
      queryConditions: ""
    };
  },
  components: {
    record
  },
  methods: {
    queryHandler(fn) {
      fn.then(res => {
        this.total = res.data.total;
        this.tabaleData = Object.freeze(res.data.rows);
        this.btnLoading = false;
        this.tableLoading = false;
      });
    },
    deleteHandler(fn) {
      this.$confirm("是否删除该条数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          fn.then(res => {
            if (res.data) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.query(this.queryConditions);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
