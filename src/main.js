import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import PaymentMethod from './components/PaymentMethod.vue'
import StartupDetails from './components/StartupDetails.vue'
import InvestorWaiting from './components/InvestorWaiting.vue'
import InvestorSafe from './components/InvestorSafe.vue'
import App from './App.vue'

const app = createApp(App)

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: HelloWorld },
      { path: '/a', component: HelloWorld2 },
      { path: '/b', component: PaymentMethod },
      { path: '/c', component: StartupDetails },
      { path: '/d', component: InvestorWaiting },
      { path: '/e', component: InvestorSafe },
    ],
})
app.use(router)
app.mount('#app')