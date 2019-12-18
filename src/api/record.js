import request from "@/utils/request";

export function getTreeList(params) {
  return request({
    url: "ItemClass/GetTreeList",
    method: "get",
    params
  });
}
// 客户
export function getCustomer(params) {
  return request({
    url: "Organization/Get",
    method: "get",
    params
  });
}

export function getCustomerRecord(data) {
  return request({
    url: "Organization/GetPageList",
    method: "post",
    data
  });
}

export function deleteCustomer(params) {
  return request({
    url: "Organization/Delete",
    method: "get",
    params
  });
}
// 部门
export function getDepartmentRecord(data) {
  return request({
    url: "Department/GetPageList",
    method: "post",
    data
  });
}

export function deleteDepartment(params) {
  return request({
    url: "Department/Delete",
    method: "get",
    params
  });
}
// 职员
export function getEmpRecord(data) {
  return request({
    url: "Emp/GetPageList",
    method: "post",
    data
  });
}

export function deleteEmp(params) {
  return request({
    url: "Emp/Delete",
    method: "get",
    params
  });
}
// 供应商
export function getSupplierRecord(data) {
  return request({
    url: "Supplier/GetPageList",
    method: "post",
    data
  });
}

export function deleteSupplier(params) {
  return request({
    url: "Supplier/Delete",
    method: "get",
    params
  });
}
// 物料
export function getICItemRecord(data) {
  return request({
    url: "ICItem/GetPageList",
    method: "post",
    data
  });
}

export function deleteICItem(params) {
  return request({
    url: "ICItem/Delete",
    method: "get",
    params
  });
}
// 仓库
export function getStockRecord(data) {
  return request({
    url: "Stock/GetPageList",
    method: "post",
    data
  });
}

export function deleteStock(params) {
  return request({
    url: "Stock/Delete",
    method: "get",
    params
  });
}
