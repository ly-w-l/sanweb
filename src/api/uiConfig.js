import request from "@/utils/request";

export function getUiConfig() {
  return request({
    url: "/uiConfig/getList",
    method: "post"
  });
}
