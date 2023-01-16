<script setup>
import './theme.css'
import {ref, reactive} from 'vue'

let now = new Date().toLocaleDateString()

const newsArr = [
  {id: 0, title: 'News1', isOpen: false, wasRead: false, text: 'text1'},
  {id: 1, title: 'News2', isOpen: false, wasRead: false, text: 'text2'},
  {id: 2, title: 'News3', isOpen: false, wasRead: false, text: 'text3'}
]
 

console.log(newsArr[0].id)

const watchCount = ref(0)
const readCount = ref(0)


function open(id) {
    console.log(id)
   
    // if(!newsArr.isOpen) {
    //   watchCount.value++;
      if(newsArr.id) {
        newsArr.isOpen = true
        console.log('check')
      }
    // }
}


// function read(id) {
//   if(!newsArr.wasRead) {
//     readCount.value++
//   }
// }




</script>

<template>
  <h1>Актуальные новости: {{now}}</h1>
  <p>Открыто: {{watchCount}} || Просмотрено: {{readRate}}</p>  
  <list-news v-for="elem in newsArr"
    :key="elem"
    :id="elem.id"
    :title="elem.title"
    :msg="elem.text"
    :isOpen="newsArr.isOpen"
    :wasRead="newsArr.wasRead"
    @open-news="open"
  />
</template>