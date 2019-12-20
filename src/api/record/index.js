import request from "@/utils/request";

let recordApi = {};
function importAll(r) {
  r.keys().forEach(key => {
    let modulekey = key.replace(/^\.\/(.*)\.\w+$/, "$1");
    recordApi[modulekey] = r(key);
    // recordApi = Object.assign(recordApi, r(key));
    // return recordApi;
  });
}
importAll(require.context("./modules", false, /\.js$/));

export function getTreeList(params) {
  return request({
    url: "ItemClass/GetTreeList",
    method: "get",
    params
  });
}

export { recordApi };
