<template>
  <gl-bill-structure BillType="单据">
    <template v-slot:btn>
      <gl-button
        :btnTexts="btnTexts"
        :needStatus="true"
        :billStatus="billStatus"
        @btnAdd="add"
        @btnEdit="edit"
        @btnSave="save"
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
    <template v-slot:table> </template>
  </gl-bill-structure>
</template>
<script>
import formRender from "@/components/globalComponents/form-render";
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
  methods: {
    add() {},
    edit() {},
    save() {}
  }
};
</script>