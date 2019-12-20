import request from "@/utils/request";
// 供应商
export function Get(params) {
  return request({
    url: "Supplier/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "Supplier/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "Supplier/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "Supplier/Add",
    method: "post",
    data
  });
}

export function Update(data) {
  return request({
    url: "Supplier/Update",
    method: "post",
    data
  });
}
