<script setup>
import {ref, reactive, provide} from 'vue'
import { store } from '../stores/newsStore' 
import './assets/theme.css'

let now = new Date().toLocaleDateString()
const newsStore = store()
provide('newsArr', newsStore.getNews()) 

</script>

<template>
  <h1>Актуальные новости: {{now}}</h1>
  <p>Открыто: {{newsStore.watchCount}} || Прочитано: {{newsStore.readCount}}</p>  
  <list-news v-for="elem in newsStore.getNews()"
    :key="elem"
    :id="elem.id"
    :title="elem.title"
    :msg="elem.text"
    :isOpen="elem.isOpen"
    :wasRead="elem.wasRead"
    @open-news="newsStore.open"
    @read-news="newsStore.read"
  />
</template>