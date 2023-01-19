<script setup>
  import './assets/theme.css'
  import appBlock from './components/AppBlock.vue'

</script>

<template>
  <app-block>
    <p>Текст</p>
    <template #header> 
      <h3>Заголовок карточки</h3>
    </template>
    <template #footer>
      <h3>Футер</h3>
    </template>
  </app-block>
</template>