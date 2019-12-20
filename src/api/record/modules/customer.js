import request from "@/utils/request";
// 客户
export function Get(params) {
  return request({
    url: "Organization/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "Organization/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "Organization/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "Organization/Add",
    method: "post",
    data
  });
}
export function Update(data) {
  return request({
    url: "Organization/Update",
    method: "post",
    data
  });
}
