<script setup>
const props = defineProps({
  id: Number,
  title: String,
  msg: String,
  isOpen: Boolean,
  wasRead: Boolean,
})

// console.log(props.id)s
</script>



<template>
  <div class="card">
    <!-- <h3>{{ id }}</h3> -->
    <button class="btn" @click="$emit('open-news', props.id)" >{{isOpen ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="isOpen">{{ msg }}</p>
    <!-- <button  class="btn" @click="" >{{wasRead ? 'Не прочитано' : 'Прочитано'}}</button> -->
  </div>
</template>
