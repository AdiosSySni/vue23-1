<script setup>
const props = defineProps({
  id: Number,
  title: String,
  msg: String,
  isOpen: Boolean,
  wasRead: Boolean,
})

</script>



<template>
  <div class="card">
    <button class="btn" @click="$emit('open-news', props.id)" >{{isOpen ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="isOpen">{{ msg }}</p>
    <button  v-if="isOpen" class="btn" @click="$emit('read-news', props.id)"  >{{wasRead ? 'Не прочитано' : 'Прочитано'}}</button>
  </div>
</template>
