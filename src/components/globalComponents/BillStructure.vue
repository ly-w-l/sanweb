<script>
import template_bill from "./template/template_bill";
import template_archive from "./template/template_archive";
export default {
  name: "GlBillStructure",
  functional: true,
  props: {
    BillType: {
      type: String
    }
  },
  render: (h, context) => {
    function selectComponent() {
      let type = context.props.BillType;
      if (type == "单据") return template_bill;
      if (type == "档案") return template_archive;
      return template_bill;
    }
    return h(selectComponent(), context.data, context.children);
  }
};
</script>
