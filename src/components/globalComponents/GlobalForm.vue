<script>
import ElxFormRenderer from "./form-render";
export default {
  name: "GlForm",

  props: {
    content: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  render(h) {
    return h("elx-form-renderer", {
      attrs: {
        content: this.content,
        disabled: this.disabled,
        inline: true
      },
      ref: "ruleForm"
    });
  },
  components: {
    ElxFormRenderer
  }
};
</script>
