<template>
  <div>
    <h1 class="text-4xl text-white bg-black">
      {{name}}
    </h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: function() {
    return {
      name: 'Hello World!',
    }
  },
});
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
