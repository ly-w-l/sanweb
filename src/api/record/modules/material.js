import request from "@/utils/request";
// 物料
export function Get(params) {
  return request({
    url: "ICItem/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "ICItem/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "ICItem/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "ICItem/Add",
    method: "post",
    data
  });
}

export function Update(data) {
  return request({
    url: "ICItem/Update",
    method: "post",
    data
  });
}
