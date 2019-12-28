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
        body: [{ FTableName: "PORequestEntry" }]
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
    },
    {
      billName: "order",
      FID: "POOrder",
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
        body: [{ FTableName: "POOrderEntry" }]
      },
      add: {
        header: { FTableName: "POOrder" },
        body: [
          {
            FTableName: "POOrderEntry",
            title: "单据明细",
            name: "Entries", // el-tab-pane标识，也对应接口中字段
            tableData: [],
            columns: []
          }
        ]
      }
    },
    {
      billName: "arrival",
      FID: "POInStock",
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
        body: [{ FTableName: "POInStockEntry" }]
      },
      add: {
        header: { FTableName: "POInStock" },
        body: [
          {
            FTableName: "POInStockEntry",
            title: "单据明细",
            name: "Entries", // el-tab-pane标识，也对应接口中字段
            tableData: [],
            columns: []
          }
        ]
      }
    },
    {
      billName: "ICInOutStock",
      FID: "A01",
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
        body: [{ FTableName: "ICInStockBillEntry" }]
      },
      add: {
        header: { FTableName: "ICInStockBill" },
        body: [
          {
            FTableName: "ICInStockBillEntry",
            title: "单据明细",
            name: "Entries", // el-tab-pane标识，也对应接口中字段
            tableData: [],
            columns: []
          }
        ]
      }
    },
    {
      billName: "invoice",
      FID: "ICPurchase",
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
        body: [{ FTableName: "ICPurchaseEntry" }]
      },
      add: {
        header: { FTableName: "ICPurchase" },
        body: [
          {
            FTableName: "ICPurchaseEntry",
            title: "单据明细",
            name: "Entries", // el-tab-pane标识，也对应接口中字段
            tableData: [],
            columns: []
          }
        ]
      }
    },
    {
      billName: "price",
      FID: "SupplyPrice",
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
        body: [{ FTableName: "t_SupplyPrice" }]
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
