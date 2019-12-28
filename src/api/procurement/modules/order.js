import request from "@/utils/request";
// 采购订单
export function Get(params) {
  return request({
    url: "POOrder/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "POOrder/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "POOrder/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "POOrder/Add",
    method: "post",
    data
  });
}
export function Update(data) {
  return request({
    url: "POOrder/Update",
    method: "post",
    data
  });
}

export function Audit(params) {
  return request({
    url: "POOrder/Audit",
    method: "get",
    params
  });
}

export function UnAudit(params) {
  return request({
    url: "POOrder/UnAudit",
    method: "get",
    params
  });
}
