import { createApp } from 'vue'
import App from './App'
import uiComponents from '@/components/UI';
import router from '@/router/router'
import store from '@/store/store'
const app = createApp(App)

uiComponents.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .mount('#app')
