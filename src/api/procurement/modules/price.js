import request from "@/utils/request";
// 供应商价格
export function Get(params) {
  return request({
    url: "SupplyPrice/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "SupplyPrice/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "SupplyPrice/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "SupplyPrice/Add",
    method: "post",
    data
  });
}
export function Update(data) {
  return request({
    url: "SupplyPrice/Update",
    method: "post",
    data
  });
}

export function Audit(params) {
  return request({
    url: "SupplyPrice/Audit",
    method: "get",
    params
  });
}

export function UnAudit(params) {
  return request({
    url: "SupplyPrice/UnAudit",
    method: "get",
    params
  });
}
