import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faUser, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

// Color Palette
import './assets/css/base.css'

library.add(faHouse, faUser, faCircleNotch);

createApp(App).
    component('font-awesome-icon', FontAwesomeIcon).
    mount('#app')
