<template>
  <gl-bill-structure :BillType="type" style="color:red">
    <template v-slot:btn>
      <gl-button
        :btnTexts="btnTexts"
        :needStatus="true"
        @btnAdd="add"
        @btnSave="save"
      ></gl-button>
    </template>
    <template v-slot:form>
      <gl-form :content="content" ref="glform"></gl-form>
    </template>
    <template v-slot:aside>
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </template>
    <template v-slot:table>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </template>
  </gl-bill-structure>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      btnTexts: ["新增", "编辑", "保存", "审核", "反审", "设置"],
      type: "档案",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      content: [
        {
          $type: "input",
          $id: "input1",
          label: "输入",
          $slot: "append",
          $el: { size: "mini", resize: "both" },
          $default: "333"
        },
        {
          $type: "date-picker",
          $id: "input2",
          label: "输入",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both", type: "datetime" }
        },
        {
          $type: "input",
          $id: "input415",
          label: "输入3",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" },
          $default: "322"
        },
        {
          $type: "input",
          $id: "input66",
          label: "输入1",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" },
          $default: "444"
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" },
          $default: "555"
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        },
        {
          $type: "input",
          $id: "input55",
          label: "输入2",
          $attrs: { width: 100 },
          $el: { size: "mini", resize: "both" }
        }
      ]
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    add() {
      let data = this.$refs.glform.getFormValue();
      console.log(data);
    },
    save() {
      console.log(222);
      this.$refs.glform.updateValue({ id: "input1", value: "我是" });
    }
  }
};
</script>
