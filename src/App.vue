<script setup>
import './theme.css'
import { provide } from 'vue'
import { store } from './components/store' 
// import NewsHeader from './components/NewsHeader.vue'


const newsStore = store()
provide('newsStore', newsStore)
let now = new Date().toLocaleDateString()



</script>

<template>
  <date-header />
  <news-header v-for="elem in newsStore.news" :key="elem" :newsTitle="elem.h1" :newsText="elem.text" />
</template>