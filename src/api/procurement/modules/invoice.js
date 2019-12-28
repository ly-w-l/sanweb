import request from "@/utils/request";
// 采购发票
export function Get(params) {
  return request({
    url: "ICPurchase/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "ICPurchase/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "ICPurchase/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "ICPurchase/Add",
    method: "post",
    data
  });
}
export function Update(data) {
  return request({
    url: "ICPurchase/Update",
    method: "post",
    data
  });
}

export function Audit(params) {
  return request({
    url: "ICPurchase/Audit",
    method: "get",
    params
  });
}

export function UnAudit(params) {
  return request({
    url: "ICPurchase/UnAudit",
    method: "get",
    params
  });
}
