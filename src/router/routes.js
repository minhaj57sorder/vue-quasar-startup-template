
const routes = [
  {
    path: '/',
    component: () => import('@/src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/src/pages/IndexPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('@/src/layouts/MiniModelLayout.vue'),
    children: [
      { path: '/pos', component: () => import('@/src/pages/IndexPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('@/src/layouts/CustomSidebarLayout.vue'),
    children: [
      { path: '/tutorials', component: () => import('@/src/pages/IndexPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]

export default routes
