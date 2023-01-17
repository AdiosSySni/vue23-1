<script setup>
import './assets/theme.css'
import {ref, reactive, provide} from 'vue'

let now = new Date().toLocaleDateString()

let newsArr = reactive([
  {id: 0, title: 'News1', isOpen: false, wasRead: false, text: 'text1'},
  {id: 1, title: 'News2', isOpen: false, wasRead: false, text: 'text2'},
  {id: 2, title: 'News3', isOpen: false, wasRead: false, text: 'text3'}
])
 
provide('newsArr', newsArr) 

console.log(newsArr[0].isOpen)

const watchCount = ref(0)
const readCount = ref(0)

function open(id) {
    if(!newsArr[id].isOpen) {
      watchCount.value++
      newsArr[id].isOpen = true
    }
    else {
      newsArr[id].isOpen = false
    }
}

function read(id) {
    if(!newsArr[id].wasRead) {
      readCount.value++
      newsArr[id].wasRead = true
    }
    else {
      newsArr[id].wasRead = false
      readCount.value--
    }
    // newsArr[id].isOpen = false
}
</script>

<template>
  <h1>Актуальные новости: {{now}}</h1>
  <p>Открыто: {{watchCount}} || Прочитано: {{readCount}}</p>  
  <list-news v-for="elem in newsArr"
    :key="elem"
    :id="elem.id"
    :title="elem.title"
    :msg="elem.text"
    :isOpen="elem.isOpen"
    :wasRead="elem.wasRead"
    @open-news="open"
    @read-news="read"
  />
</template>