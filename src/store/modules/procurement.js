const state = {
  pageSetting: [
    {
      billName: "request",
      FID: "PORequest",
      query: {
        formOptions: [
          {
            $type: "group",
            $id: "FNumber",

            $items: [
              {
                $id: "FNumber1",
                $type: "input",
                label: "客户代码",
                $operator: ">=",
                $el: { size: "mini" }
              },
              {
                $id: "FNumber2",
                $type: "input",
                label: "至",
                $operator: "<=",
                $el: { size: "mini" }
              }
            ]
          },
          {
            $type: "input",
            $id: "FName",
            label: "客户名称",
            $operator: "=",
            $el: { size: "mini", resize: "both", type: "datetime" }
          }
        ], // 查询条件
        body: [{ FTableName: "t_Organization" }]
      },
      add: {
        header: { FTableName: "PORequest" },
        body: [
          {
            FTableName: "PORequestEntry",
            title: "单据明细",
            name: "Entries", // el-tab-pane标识，也对应接口中字段
            tableData: [],
            columns: []
          }
        ]
      }
    }
  ]
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
