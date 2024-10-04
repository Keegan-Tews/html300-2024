import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Home from './components/Home.vue'
import Accordion from './components/Accordion.vue'
import Images from './components/Images.vue'
import Grid from './components/Grid.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//make bootstrap available everywhere

import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

createApp(App).use(router).mount('#app')
