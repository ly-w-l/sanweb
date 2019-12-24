let procurementApi = {};
function importAll(r) {
  r.keys().forEach(key => {
    let modulekey = key.replace(/^\.\/(.*)\.\w+$/, "$1");
    procurementApi[modulekey] = r(key);
    // recordApi = Object.assign(recordApi, r(key));
    // return recordApi;
  });
}
importAll(require.context("./modules", false, /\.js$/));

export { procurementApi };
