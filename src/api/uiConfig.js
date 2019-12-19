import request from "@/utils/request";

export function getUiConfig(params) {
  return request({
    url: "/UIConfig/GetList",
    method: "get",
    params
  });
}
