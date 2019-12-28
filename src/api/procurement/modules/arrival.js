import request from "@/utils/request";
// 采购到货
export function Get(params) {
  return request({
    url: "POInStock/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "POInStock/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "POInStock/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "POInStock/Add",
    method: "post",
    data
  });
}
export function Update(data) {
  return request({
    url: "POInStock/Update",
    method: "post",
    data
  });
}

export function Audit(params) {
  return request({
    url: "POInStock/Audit",
    method: "get",
    params
  });
}

export function UnAudit(params) {
  return request({
    url: "POInStock/UnAudit",
    method: "get",
    params
  });
}
