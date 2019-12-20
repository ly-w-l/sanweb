// 类别标识数字，来自数据库表t_ItemClass
// FItemClassID = {
//   客户: 1,
//   部门: 2,
//   职员: 3,
//   物料: 4,
//   仓库: 5,
//   会计科目: 6,
//   供应商: 8,
//   项目: 9,
//   生产资料: 10,
//   量具: 12,
//   项目BOM: 15
// }
// import { getCustomerRecord } from "@/api/record";
const state = {
  pageSetting: [
    {
      billName: "customer",
      FID: "T01",
      FItemClassID: 1,
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
    {
      billName: "department",
      FID: "T02",
      FItemClassID: 2,
      formOptions: [
        {
          $type: "group",
          $id: "FNumber",

          $items: [
            {
              $id: "FNumber1",
              $type: "input",
              label: "部门代码",
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
          label: "部门名称",
          $operator: "=",
          $el: { size: "mini", resize: "both", type: "datetime" }
        }
      ], // 查询条件
      body: [{ FTableName: "t_Department" }]
    },
    {
      billName: "employee",
      FID: "T03",
      FItemClassID: 3,
      formOptions: [
        {
          $type: "group",
          $id: "FNumber",

          $items: [
            {
              $id: "FNumber1",
              $type: "input",
              label: "职员代码",
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
          label: "职员名称",
          $operator: "=",
          $el: { size: "mini", resize: "both", type: "datetime" }
        }
      ], // 查询条件
      body: [{ FTableName: "t_Emp" }]
    },
    {
      billName: "supplier",
      FID: "T08",
      FItemClassID: 8,
      formOptions: [
        {
          $type: "group",
          $id: "FNumber",

          $items: [
            {
              $id: "FNumber1",
              $type: "input",
              label: "供应商代码",
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
          label: "供应商名称",
          $operator: "=",
          $el: { size: "mini", resize: "both", type: "datetime" }
        }
      ], // 查询条件
      body: [{ FTableName: "t_Supplier" }]
    },
    {
      billName: "material",
      FID: "T04",
      FItemClassID: 4,
      formOptions: [
        {
          $type: "group",
          $id: "FNumber",

          $items: [
            {
              $id: "FNumber1",
              $type: "input",
              label: "物料代码",
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
          label: "物料名称",
          $operator: "=",
          $el: { size: "mini", resize: "both", type: "datetime" }
        }
      ], // 查询条件
      body: [{ FTableName: "t_ICItem" }]
    },
    {
      billName: "warehouse",
      FID: "T05",
      FItemClassID: 5,
      formOptions: [
        {
          $type: "group",
          $id: "FNumber",

          $items: [
            {
              $id: "FNumber1",
              $type: "input",
              label: "仓库代码",
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
          label: "仓库名称",
          $operator: "=",
          $el: { size: "mini", resize: "both", type: "datetime" }
        }
      ], // 查询条件
      body: [{ FTableName: "t_Stock" }]
    }
  ]
};

const mutations = {
  // SET_CUSTOMER_TABLE_DATA: (state, data) => {
  //   const customerSetting = state.pageSetting.find(
  //     el => el.billName === data.name
  //   );
  //   customerSetting.tableData = data.commitData;
  // }
};

const actions = {
  // getCustomerRecord({ commit }, data) {
  //   let { commitData, name } = data;
  //   return new Promise((resolve, reject) => {
  //     getCustomerRecord(commitData).then(res => {
  //       commit("SET_CUSTOMER_TABLE_DATA", { commitData: res.data.rows, name });
  //       resolve(res.data);
  //     });
  //   });
  // }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
