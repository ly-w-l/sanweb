<script>
import headerSetting from "@/views/setting/header";
import bodySetting from "@/views/setting/body";
export default {
  name: "dropdown",
  data() {
    return {
      dialogVisible: false,
      panelType: ""
    };
  },
  components: {
    headerSetting,
    bodySetting
  },
  render(h) {
    return h("el-dropdown", { on: { command: this.handleCommand } }, [
      h("el-button", { attrs: { size: "mini" } }, [
        "设置",
        <i class="el-icon-arrow-down el-icon--right"></i>
      ]),
      h("el-dropdown-menu", { slot: "dropdown" }, [
        h("el-dropdown-item", { attrs: { command: "a" } }, "表头字段配置"),
        h("el-dropdown-item", { attrs: { command: "b" } }, "表体字段配置")
      ]),
      h(
        "el-dialog",
        {
          attrs: {
            title: "字段配置",
            visible: this.dialogVisible,
            fullscreen: true,
            "destroy-on-close": true
          },
          on: {
            "update:visible": () => {
              this.dialogVisible = this.$event;
            }
          }
        },
        this.changeSettingPanel()
      )
    ]);
  },
  methods: {
    changeSettingPanel() {
      let template = [];
      if (this.panelType === "a") {
        console.log(this.panelType);
        template.push(<header-setting />);
      } else if (this.panelType === "b") {
        template.push(<body-setting />);
      }
      return template;
    },
    //
    handleCommand(command) {
      this.panelType = command;
      this.dialogVisible = true;
      // this.$message("click on item " + command);
    }
  }
};
</script>
