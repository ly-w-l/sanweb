import request from "@/utils/request";
// 仓库
export function Get(params) {
  return request({
    url: "Stock/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "Stock/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "Stock/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "Stock/Add",
    method: "post",
    data
  });
}

export function Update(data) {
  return request({
    url: "Stock/Update",
    method: "post",
    data
  });
}
