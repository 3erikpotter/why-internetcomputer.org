import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

if(window.innerWidth <= 480) {
  app.provide('isMobile', true);
  document.documentElement.setAttribute('device', 'mobile');
} else if(window.innerWidth > 480 && window.innerWidth <= 820) {
  app.provide('isTablet', true)
  document.documentElement.setAttribute('device', 'tablet');
} else {
  app.provide('isDesktop', true)
  document.documentElement.setAttribute('device', 'desktop');
}
app.mount('#app')
