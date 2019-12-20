import request from "@/utils/request";
// 部门
export function Get(params) {
  return request({
    url: "Department/Get",
    method: "get",
    params
  });
}

export function GetPageList(data) {
  return request({
    url: "Department/GetPageList",
    method: "post",
    data
  });
}

export function Delete(params) {
  return request({
    url: "Department/Delete",
    method: "get",
    params
  });
}

export function Add(data) {
  return request({
    url: "Department/Add",
    method: "post",
    data
  });
}

export function Update(data) {
  return request({
    url: "Department/Update",
    method: "post",
    data
  });
}
