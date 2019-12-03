import Vue from "vue";
function registerAllComponents(requireContext) {
  requireContext.keys().forEach(comp => {
    const vueComp = requireContext(comp);
    console.log(vueComp.default);
    const compName = vueComp.default.name
      ? vueComp.default.name
      : /\/([\w-]+)\.vue$/.exec(comp)[1];
    console.log(compName);
    Vue.component(compName, vueComp.default);
  });
}
registerAllComponents(require.context("./", false, /\.vue$/));
