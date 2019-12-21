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
  </gl-bill-structure>
</template>
<script>
import formRender from "@/components/globalComponents/form-render";
import { filterEmptyCommitData, createFormOptions } from "@/utils";
import { getUiConfig } from "@/api/uiConfig";
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
    FItemID: Number,
    api: Object
  },
  created() {
    this.formHandler().then(res => {
      this.comfirmStatus();
    });
  },
  methods: {
    // 根据传入的FItemID请求数据
    comfirmStatus() {
      if (this.FItemID) {
        this.api.Get({ fItemId: this.FItemID }).then(res => {
          // console.log(res.data);
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
          this.content = createFormOptions(res.data);
          resolve();
        });
      });
    },
    add() {
      this.$refs.glform.resetFields();
      this.billStatus = process.env.VUE_APP_ADD;
    },
    edit() {
      // console.log(filterEmptyCommitData(this.$refs.glform.getFormValue()));
      // console.log(this.$refs.glform.getFormValue());
      this.billStatus = process.env.VUE_APP_EDIT;
    },
    save() {
      this.$refs.glform.validate(valid => {
        if (valid) {
          let request;
          this.billStatus === process.env.VUE_APP_ADD
            ? (request = this.api.Add)
            : (request = this.api.Update);
          let commitData = filterEmptyCommitData(
            this.$refs.glform.getFormValue()
          );
          request(commitData).then(res => {
            if (res) {
              this.comfirmStatus();
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>