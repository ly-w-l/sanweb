<script>
import ElxFormRenderer from "../form-render";
export default {
  name: "GlForm",

  props: {
    content: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean
    },
    _default: [String, Number], // 默认值
    inputValue: Boolean // 在表格中隐藏时把值赋给tabledata用
  },
  render(h) {
    return h(
      "elx-form-renderer",
      {
        attrs: {
          content: [{ ...this.content[0], $default: this._default }],
          disabled: this.disabled,
          inline: true
        },
        ref: "ruleForm"
      },
      [h("slot")]
    );
  },
  components: {
    ElxFormRenderer
  },
  methods: {
    getFormValue() {
      let data = this.$refs.ruleForm.getFormValue();
      return data;
    },
    updateValue(data) {
      this.$refs.ruleForm.updateValue(data);
    }
  },
  watch: {
    inputValue(newVal, oldVal) {
      if (!newVal) {
        this.$emit("update:inputValue", this.$refs.ruleForm.getFormValue());
      }
    }
  }
};
</script>
