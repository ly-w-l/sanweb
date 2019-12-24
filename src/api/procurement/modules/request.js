import request from "@/utils/request";
// 采购申请单
export function Get(params) {
  return request({
    url: "PORequest/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "PORequest/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "PORequest/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "PORequest/Add",
    method: "post",
    data
  });
}
export function Update(data) {
  return request({
    url: "PORequest/Update",
    method: "post",
    data
  });
}

export function Audit(params) {
  return request({
    url: "PORequest/Audit",
    method: "get",
    params
  });
}

export function UnAudit(params) {
  return request({
    url: "PORequest/UnAudit",
    method: "get",
    params
  });
}
