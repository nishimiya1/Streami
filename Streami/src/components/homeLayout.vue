<template>
    <navBar/>
    
        <RouterView/>

    <foot/>
</template>

<script setup lang="ts">
import navBar from './navBar.vue';
import foot from "./footer.vue";
</script>