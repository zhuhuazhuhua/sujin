import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
const Index = () => import('@/pages/index');
const baas = () => import('@/pages/baas');
const solution = () => import('@/pages/solution');
const certificate = () => import('@/pages/certificate');
const traceability = () => import('@/pages/traceability');
const about = () => import('@/pages/about');

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/baas',
      name: 'baas',
      component: baas
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    },
    {
      path: '/certificate',
      name: 'certificate',
      component: certificate
    },
    {
      path: '/traceability',
      name: 'traceability',
      component: traceability
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  ]
})
