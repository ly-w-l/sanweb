import request from "@/utils/request";
// 职员
export function Get(params) {
  return request({
    url: "Emp/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "Emp/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "Emp/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "Emp/Add",
    method: "post",
    data
  });
}

export function Update(data) {
  return request({
    url: "Emp/Update",
    method: "post",
    data
  });
}
