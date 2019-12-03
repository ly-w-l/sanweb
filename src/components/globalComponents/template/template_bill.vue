<script>
export default {
  functional: true,
  render(h, context) {
    return h("el-container", context.data, [
      h("el-header", { style: { height: "aotu" } }, context.slots().btn),
      h("el-main", context.slots().form),
      h("el-footer", { style: { height: "aotu" } }, context.slots().table)
    ]);
  }
};
</script>