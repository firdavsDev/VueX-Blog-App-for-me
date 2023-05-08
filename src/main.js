import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'

const app = createApp(App)

//ui-components
uiComponents.map(component => {
    app.component(component.name, component)
})
//rouer
app.use(router)
//store
app.use(store)
//mount
app.mount('#app')
