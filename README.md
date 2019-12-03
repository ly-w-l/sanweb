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

# vue 对象中各 options 以及生命周期的执行顺序猜想（日后会看源码证实）

props->computed->watch(只要有 updata 反复执行)

# vue 基础细节 切记！！

HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名)

# 将项目提交到 Git

电脑上安装 git，建立远程仓库等等..自行百度
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/asdzxc703941822/SanWeb.git
git push -u origin master

# 疑问

按钮组件改变状态时会触发 render 函数

# 用到的第三方插件

在 element-ui 的基础上封装的表单插件 https://github.com/leezng/element-patch/blob/el-form-renderer/README.zh-CN.md https://leezng.github.io/element-patch/#/form-renderer (由于不满足本项目需求 下载源码放到 components/globalComponents/form-render 下对其略做修改)
