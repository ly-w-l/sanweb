<template>
  <gl-bill-structure BillType="单据">
    <template v-slot:btn>
      <gl-button
        :btnTexts="btnTexts"
        :needStatus="true"
        :billStatus="billStatus"
        @btnAdd="add"
        @btnEdit="edit"
      >
      </gl-button>
    </template>
    <template v-slot:form>
      <form-render
        :content="content"
        ref="glform"
        :inline="true"
        :disabled="disabled"
      >
      </form-render>
    </template>
  </gl-bill-structure>
</template>
<script>
import formRender from "@/components/globalComponents/form-render";
import { getUiConfig } from "@/api/uiConfig";
import { getCustomer } from "@/api/record";
export default {
  data() {
    return {
      btnTexts: ["新增", "编辑", "保存"],
      content: [],
      billStatus: process.env.VUE_APP_ADD
    };
  },
  computed: {
    disabled() {
      if (
        this.billStatus === process.env.VUE_APP_ADD ||
        this.billStatus === process.env.VUE_APP_EDIT
      ) {
        return false;
      } else {
        return true;
      }
    }
  },
  components: {
    formRender
  },
  props: {
    pageSetting: Object,
    FItmeID: String
  },
  created() {
    this.formHandler().then(res => {
      this.comfirmStatus();
    });
  },
  methods: {
    // 根据传入的FItemID请求数据
    comfirmStatus() {
      if (this.FItmeID) {
        getCustomer({ fItemId: this.FItmeID }).then(res => {
          console.log(res.data);
          Object.entries(res.data).forEach(el => {
            this.$refs.glform.updateValue({ id: el[0], value: el[1] });
          });
          this.billStatus = process.env.VUE_APP_BROWSE;
        });
      } else {
        this.billStatus = process.env.VUE_APP_ADD;
      }
    },
    // 根据配置生成表单
    formHandler() {
      return new Promise((resolve, reject) => {
        getUiConfig({
          FID: this.pageSetting.FID,
          fTableName: this.pageSetting.body[0].FTableName
        }).then(res => {
          // console.log(res.data);
          let data = res.data
            .filter(el => el.IsEnabled) // 过滤未创建
            .sort((a, b) => a.FOrderNo - b.FOrderNo) // 排序
            .map(el => {
              let formOptions = { $el: { size: "mini" } };
              formOptions.$id = el.FFieldName; // 字段
              formOptions.label = el.FDisplayName; // 中文名
              el.FDisplayType // 表单类型
                ? (formOptions.$type = el.FDisplayType)
                : (formOptions.$type = "input");
              return formOptions;
            });
          this.content = data;
          resolve();
        });
      });
    },
    add() {},
    edit() {}
  }
};
</script>