import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/record",
    component: Layout,
    meta: { title: "基础资料", icon: "form" },
    children: [
      {
        path: "customer",
        name: "customer",
        component: () => import("@/views/baseData/customer.vue"),
        meta: { title: "客户档案", icon: "form" }
      },
      {
        path: "department",
        name: "department",
        component: () => import("@/views/baseData/department.vue"),
        meta: { title: "部门档案", icon: "form" }
      },
      {
        path: "employee",
        name: "employee",
        component: () => import("@/views/baseData/employee.vue"),
        meta: { title: "职员档案", icon: "form" }
      },
      {
        path: "material",
        name: "material",
        component: () => import("@/views/baseData/material.vue"),
        meta: { title: "物料档案", icon: "form" }
      },
      {
        path: "supplier",
        name: "supplier",
        component: () => import("@/views/baseData/supplier.vue"),
        meta: { title: "供应商档案", icon: "form" }
      },
      {
        path: "warehouse",
        name: "warehouse",
        component: () => import("@/views/baseData/warehouse.vue"),
        meta: { title: "仓库档案", icon: "form" }
      }
    ]
  },
  {
    path: "/procurement",
    component: Layout,
    meta: { title: "采购管理", icon: "form" },
    children: [
      {
        path: "bills",
        name: "bills",
        component: () => import("@/views/procurement/bills/index.vue"),
        meta: { title: "采购业务", icon: "form" },
        children: [
          {
            path: "procurementRequest",
            name: "procurementRequest",
            component: () =>
              import("@/views/procurement/bills/procurement-request/index.vue"),
            meta: { title: "采购申请", icon: "form" },
            children: [
              {
                path: "procurementRequest-add",
                name: "procurementRequest-add",
                component: () =>
                  import(
                    "@/views/procurement/bills/procurement-request/add.vue"
                  ),
                meta: { title: "采购申请-新增", icon: "form" }
              },
              {
                path: "procurementRequest-query",
                name: "procurementRequest-query",
                component: () =>
                  import(
                    "@/views/procurement/bills/procurement-request/query.vue"
                  ),
                meta: { title: "采购申请-查询", icon: "form" }
              }
            ]
          }
        ]
      },
      {
        path: "price",
        name: "price",
        component: () => import("@/views/procurement/price/index.vue"),
        meta: { title: "价格政策", icon: "form" }
      },
      {
        path: "report",
        name: "report",
        component: () => import("@/views/procurement/report/index.vue"),
        meta: { title: "采购报表", icon: "form" }
      }
    ]
  },
  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://panjiachen.github.io/vue-element-admin-site/#/",
        meta: { title: "External Link", icon: "link" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
