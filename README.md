# 安装

yarn install

# 启动

yarn dev

# 打包

yarn build

# 待优化问题

因为基于 element-admin-template，所以有些冗余的东西还没去除
每个.vue 文件中 options 的书写规范
按钮组件中按钮顺序的控制，按钮图标

# vue 对象中各 options 以及生命周期的执行顺序猜想

props->computed->watch(只要有 updata 反复执行)

# 遇到的问题，及解决方法

element dialog 关闭后不会销毁 用 v-if 来实现销毁

# 将项目提交到 Git

电脑上安装 git，建立远程仓库等等..自行百度
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/asdzxc703941822/SanWeb.git
git push -u origin master

# 疑问

按钮组件改变状态时会触发 render 函数

# 用到的第三方组件

### el-form-renderer

在 element-ui 的基础上封装的表单组件 https://github.com/leezng/element-patch/blob/el-form-renderer/README.zh-CN.md https://leezng.github.io/element-patch/#/ (由于不满足本项目需求 下载源码放到 components/globalComponents/form-render 下对其略做修改)

### el-bigdata-table

为解决 el-table 的大数据加载
https://github.com/code-farmer-i/el-bigdata-table
该依赖用了 es6 语法 需在 vue.config.js 中配置 transpileDependencies

# 二次封装组件 数据模型

gl-table
prop,label,innerInput,disabled,IsSummary,width

gl-form
[
{
$id: "form1", // 每一个原子都存在id，用于存储该原子的值，注意不能重复
    $type: "input", // 类型，element 提供的所有表单类型，即 el-xxx
$enableWhen: { form2: 'beijing' }, // 可选属性，表示当 form2 的值为 beijing 时显示
    $attrs: { 'data-name': 'form1' }, // 可选, 写法与 Vue 的 Render 函数规范保持一致
label: "输入框", // el-form-item 上的属性
$default: "这是默认值",
    rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }] // el-form-item上的属性
  }, {
    $id: "form2",
$type: "select",
    label: "选择框",
    // $el 上用于定义具体原子表单(此处为 el-select)的属性
$el: {
      placeholder: "请选择内容"
    },
    // $options 具有选择功能的原子表单可用此定义可选项，例如: select, radio-group, radio-button, checkbox-group, checkbox-button
\$options: [{
label: '区域一',
value: 'shanghai'
}, {
label: '区域二',
value: 'beijing'
}]
}
]
