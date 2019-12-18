<script>
import dropDown from "./dropdown/dropdown_button";

export default {
  name: "GlButton",
  data() {
    return {
      //按钮配置列
      btnOptions: [
        {
          text: "新增",
          icon: "el-icon-document-add",
          event: this.btnAdd,
          isdisable: false
        },
        {
          text: "编辑",
          icon: "el-icon-edit",
          event: this.btnEdit,
          isdisable: false
        },
        {
          text: "保存",
          icon: "el-icon-s-order",
          event: this.btnSave,
          isdisable: false
        },
        {
          text: "审核",
          icon: "el-icon-document-checked",
          event: this.btnAudit,
          isdisable: false
        },
        {
          text: "反审",
          icon: "el-icon-document-delete",
          event: this.btnUnAudit,
          isdisable: false
        },
        {
          text: "删除",
          icon: "el-icon-delete",
          event: this.btnDelete,
          isdisable: false
        },
        {
          text: "获取所属人员",
          icon: "el-icon-thumb",
          event: this.btnRollColl,
          isdisable: false
        },
        {
          text: "增行",
          icon: "el-icon-folder-add",
          event: this.btnAddRow,
          isdisable: false
        },
        {
          text: "删行",
          icon: "el-icon-folder-delete",
          event: this.btnDeleteRow,
          isdisable: false
        },
        {
          text: "设置",
          icon: "el-icon-folder-delete",
          event: this.btnDeleteRow,
          isdisable: false
        }
      ]
      // billStatus: process.env.VUE_APP_ADD
    };
  },
  render(h) {
    return h(
      "el-button-group",
      // { props: this.props },
      this.buttonChildrenArray(h)
    );
  },
  computed: {
    //这里把传入的字符串数组和按钮配置列表做处理生成需要渲染的列表
    buttonArray() {
      return this.btnOptions.filter(el => this.btnTexts.indexOf(el.text) > -1);
    }
  },
  components: {
    dropDown
  },
  props: {
    btnTexts: {
      type: Array,
      required: true
    },
    needStatus: {
      type: Boolean,
      default: false
    },
    billStatus: String
  },
  watch: {
    billStatus(newValue) {
      if (this.needStatus) {
        this.btnStatusChange(newValue);
        this.$emit("update:billStatus", newValue);
      }
    }
  },
  methods: {
    //按下标控制对应按钮的禁用状态
    btnStatusChange(billStatus) {
      if (billStatus === process.env.VUE_APP_ADD) {
        this.$set(this.btnOptions[0], "isdisable", true);
        this.$set(this.btnOptions[1], "isdisable", true);
        this.$set(this.btnOptions[2], "isdisable", false);
        this.$set(this.btnOptions[3], "isdisable", true);
        this.$set(this.btnOptions[4], "isdisable", true);
        this.$set(this.btnOptions[6], "isdisable", false); //点名
        this.$set(this.btnOptions[7], "isdisable", false); //增行
        this.$set(this.btnOptions[8], "isdisable", false); //删行
      }
      if (billStatus === process.env.VUE_APP_BROWSE) {
        this.$set(this.btnOptions[0], "isdisable", false);
        this.$set(this.btnOptions[1], "isdisable", false);
        this.$set(this.btnOptions[2], "isdisable", true);
        this.$set(this.btnOptions[3], "isdisable", false);
        this.$set(this.btnOptions[4], "isdisable", true);
        this.$set(this.btnOptions[6], "isdisable", true); //点名
        this.$set(this.btnOptions[7], "isdisable", true); //增行
        this.$set(this.btnOptions[8], "isdisable", true); //删行
      }
      if (billStatus === process.env.VUE_APP_EDIT) {
        this.$set(this.btnOptions[0], "isdisable", false);
        this.$set(this.btnOptions[1], "isdisable", true);
        this.$set(this.btnOptions[2], "isdisable", false);
        this.$set(this.btnOptions[3], "isdisable", true);
        this.$set(this.btnOptions[4], "isdisable", true);
        this.$set(this.btnOptions[6], "isdisable", true); //点名
        this.$set(this.btnOptions[7], "isdisable", false); //增行
        this.$set(this.btnOptions[8], "isdisable", false); //删行
      }
      if (billStatus === process.env.VUE_APP_CHECKED) {
        this.$set(this.btnOptions[0], "isdisable", false);
        this.$set(this.btnOptions[1], "isdisable", true);
        this.$set(this.btnOptions[2], "isdisable", true);
        this.$set(this.btnOptions[3], "isdisable", true);
        this.$set(this.btnOptions[4], "isdisable", false);
        this.$set(this.btnOptions[6], "isdisable", true); //点名
        this.$set(this.btnOptions[7], "isdisable", true); //增行
        this.$set(this.btnOptions[8], "isdisable", true); //删行
      }
    },
    //生成el-button-group 子vnode的方法
    buttonChildrenArray(h) {
      return this.buttonArray.map(el => {
        if (el.text === "设置") {
          return <drop-down />;
        }
        let options = {
          attrs: {
            size: "mini",
            icon: el.icon,
            disabled: el.isdisable
          },
          on: { click: el.event },
          key: el.text
        };
        // console.log(el);
        return h("el-button", options, el.text);
      });
    },
    //如果父组件有传入的按钮事件优先使用传入的
    btnEventHandler(btnEvent) {
      if (Object.keys(this.$listeners).indexOf(btnEvent) > -1) {
        this.$emit(btnEvent);
        return true;
      } else {
        return false;
      }
    },
    btnAdd() {
      if (this.btnEventHandler("btnAdd")) return;

      this.billStatus = process.env.VUE_APP_ADD;
    },
    btnEdit() {
      if (this.btnEventHandler("btnEdit")) return;
      this.billStatus = process.env.VUE_APP_EDIT;
    },
    btnSave() {
      if (this.btnEventHandler("btnSave")) return;
      this.billStatus = process.env.VUE_APP_BROWSE;
    },
    btnAudit() {
      if (this.btnEventHandler("btnAudit")) return;
      this.billStatus = process.env.VUE_APP_CHECKED;
    },
    btnUnAudit() {
      if (this.btnEventHandler("btnUnAudit")) return;
      this.billStatus = process.env.VUE_APP_BROWSE;
    },
    btnDelete() {
      if (this.btnEventHandler("btnDelete")) return;
    },
    btnRollColl() {
      if (this.btnEventHandler("btnRollColl")) return;
    },
    btnAddRow() {
      if (this.btnEventHandler("btnAddRow")) return;
    },
    btnDeleteRow() {
      if (this.btnEventHandler("btnDeleteRow")) return;
    }
  }
};
</script>
