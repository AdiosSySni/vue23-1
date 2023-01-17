<script setup>
import AppButton from './AppButton.vue'
import AppListNews from './AppListNews.vue'

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
    <app-button @action="$emit('open-news', props.id)">{{ isOpen ? 'Свернуть' : 'Развернуть' }}</app-button>
    <hr/>
    <!-- <p v-if="isOpen">{{ msg }}</p> -->
    <app-list-news v-if="isOpen"/>

    <app-button  v-if="!wasRead" 
    class="primary" 
    @action="$emit('read-news', props.id)">Прочитано</app-button>
    
    <app-button  v-if="wasRead" 
    class="danger" 
    @action="$emit('read-news', props.id)">Не прочитано</app-button>
  </div>
  
  
</template>
