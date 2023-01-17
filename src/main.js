import { createApp } from 'vue'
import App from './App.vue'
import ListNews from './components/ListNews.vue'


createApp(App)
.component('list-news', ListNews)
.mount('#app')