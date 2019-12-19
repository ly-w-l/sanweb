<script>
export default {
  functional: true,
  render(h, context) {
    return h("el-container", context.data, [
      h("el-header", { style: { height: "aotu" } }, context.slots().btn),
      h("el-container", [
        h(
          "el-header",
          { style: { height: "aotu", padding: "10px 20px" } },
          context.slots().form
        ),
        h("el-container", [
          h(
            "el-aside",
            { style: { paddingLeft: "20px", width: "200px" } },
            context.slots().aside
          ),
          h("el-main", { style: { padding: "0 20px" } }, context.slots().table)
        ])
      ])
    ]);
  }
};
</script>