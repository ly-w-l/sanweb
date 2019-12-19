<template>
  <gl-bill-structure BillType="单据" style="color:red">
    <template v-slot:btn>
      <gl-button
        :btnTexts="btnTexts"
        :needStatus="true"
        @btnAdd="add"
        @btnEdit="edit"
      >
      </gl-button>
    </template>
    <template v-slot:form>
      <form-render :content="content" ref="glform" :inline="true">
      </form-render>
    </template>
  </gl-bill-structure>
</template>
<script>
import formRender from "@/components/globalComponents/form-render";
import { getUiConfig } from "@/api/uiConfig";
export default {
  data() {
    return {
      btnTexts: ["新增", "编辑", "保存"],
      content: [],
      billStatus: ""
    };
  },
  components: {
    formRender
  },
  props: {
    pageSetting: Object
  },
  created() {
    this.formHandler();
  },
  methods: {
    formHandler() {
      getUiConfig({
        FID: this.pageSetting.FID,
        fTableName: this.pageSetting.body[0].FTableName
      }).then(res => {
        // console.log(res.data);
        let data = res.data
          .filter(el => el.IsEnabled) //过滤未创建
          .sort((a, b) => a.FOrderNo - b.FOrderNo) //排序
          .map(el => {
            let formOptions = { $el: { size: "mini" } };
            formOptions.$id = el.FFieldName; //字段
            formOptions.label = el.FDisplayName; //中文名
            el.FDisplayType // 表单类型
              ? (formOptions.$type = el.FDisplayType)
              : (formOptions.$type = "input");
            return formOptions;
          });
        this.content = data;
      });
    },
    add() {},
    edit() {}
  }
};
</script>