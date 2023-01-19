<script setup>

</script>

<template>
    <div class="card">
        <slot name="header">Дефолтный хедер</slot>
        <slot name="default">Дефолтный текст</slot>
        <slot name="footer">Дефолтный футер</slot>
    </div>
</template>