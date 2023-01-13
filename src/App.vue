<script setup>
import './theme.css'
import { provide } from 'vue'
import { store } from './components/store' 

const newsStore = store()
provide('newsStore', newsStore)
let now = new Date().toLocaleDateString()

function openBtnNews(n) {
  if(!newsStore.isOpen.value) {
    newsStore.watchCount.value += n
    console.log(newsStore.watchCount.value)
  }
  newsStore.isOpen.value = !newsStore.isOpen.value
}

function readBtnNews(n) {
  if(!newsStore.wasRead.value) {
    newsStore.wasRead.value = false
    newsStore.readCount.value += n
  }
 newsStore.wasRead.value = !newsStore.wasRead.value
}
</script>

<template>
  <date-header />
  <news-header v-for="elem in newsStore.news" @countWatchNews="openBtnNews" @countReadNews="readBtnNews" :key="elem" :newsTitle="elem.h1" :newsText="elem.text" />
</template>