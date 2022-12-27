<template>
  <div>
    <h1 class="text-4xl text-white bg-black">
      {{ name }}
    </h1>
    <Test/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Test from './Test'

const name = ref('Hello World!')
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
