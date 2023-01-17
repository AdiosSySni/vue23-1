<script setup>
const props = defineProps({
    color: {
        type: String,
        default: '',
        validator(value) {
            return ['', 'primary', 'danger'].includes(value)
        },
    },
})
</script>

<template>
    <button class="btn" 
    :class="color" 
    @click="$emit('action')">
        <slot></slot>
    </button>
</template>

<style lang="sass" scoped>

</style>
