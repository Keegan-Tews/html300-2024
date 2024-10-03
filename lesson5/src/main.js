import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import router from './router/index.js'
import Home from './components/Home.vue'
import Accordion from './components/Accordion.vue'
import Images from './components/Images.vue'
import Grid from './components/Grid.vue'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

// import VueRouter from 'vue-router'

// Vue.config.productionTip = false

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/Accordion',
//     name: 'Accordion',
//     component: () => import('@/components/Accordion.vue')
//   },
//   {
//     path: '/Images',
//     name: 'Images',
//     component: () => import('@/components/Images.vue')
//   },
//   {
//     path: '/Grid',
//     name: 'Grid',
//     component: () => import('@/components/Grid.vue')
//   }
// ]

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })

//make bootstrap available everywhere

// import * as bootstrap from 'bootstrap'
// window.bootstrap = bootstrap

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
