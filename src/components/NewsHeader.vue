<script setup>
import { ref, inject } from 'vue'
const store = inject('newsStore')

defineProps({
  newsTitle: String,
  newsText: String
})

console.log(store.isOpen.value, + ' ' + store.wasRead.value)

</script>

<!-- <template>
  <div class="card">
    <h3>{{ newsTitle }}</h3>
    <button class="btn" @click="store.openBtnNews">{{store.isOpen.value ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="store.isOpen.value ">{{ newsText }}</p>
    <button v-if="store.isOpen.value " class="btn" @click="store.redBtnNews" >{{store.wasRead.value ? 'Не прочитано' : 'Прочитано'}}</button>
  </div>
</template> -->

<template>
  <div class="card">
    <h3>{{ newsTitle }}</h3>
    <button class="btn" @click="$emit('countWatchNews', 1)">{{store.isOpen.value ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="store.isOpen.value ">{{ newsText }}</p>
    <button v-if="store.isOpen.value " class="btn" @click="$emit('countReadNews', 1)" >{{store.wasRead.value ? 'Не прочитано' : 'Прочитано'}}</button>
  </div>
</template>
