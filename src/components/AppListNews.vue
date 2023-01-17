<script setup>
import {inject} from 'vue'
const newsArr = inject('newsArr')
</script>

<template>
    <h3>Список всех новостей</h3>
    <ul>
        <li v-for="item in newsArr" :key="item"> {{ item.title }}
           <span v-if="item.wasRead">!!!</span>
        </li>
    </ul>
</template>

<style lang="sass" scoped>

</style>