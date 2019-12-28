import request from "@/utils/request";
// 采购退货
export function Get(params) {
  return request({
    url: "ICInStockBillA01/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "ICInStockBillA01/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "ICInStockBillA01/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "ICInStockBillA01/Add",
    method: "post",
    data
  });
}
export function Update(data) {
  return request({
    url: "ICInStockBillA01/Update",
    method: "post",
    data
  });
}

export function Audit(params) {
  return request({
    url: "ICInStockBillA01/Audit",
    method: "get",
    params
  });
}

export function UnAudit(params) {
  return request({
    url: "ICInStockBillA01/UnAudit",
    method: "get",
    params
  });
}
