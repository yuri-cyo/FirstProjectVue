<template>
	 <h1>Home</h1>
    <CounterButton />
	 <h1>{{ input }}</h1>
  <input v-model="input" type="text">
</template>

<script setup>
import CounterButton from '@/components/CounterButton.vue'
import { reactive, ref } from 'vue'


const input = ref('')

</script>

<style lang="scss" scoped>

</style>