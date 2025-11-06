<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-2xl font-bold">{{ msg }}</h1>

    <div class="card">
      <button
        type="button"
        @click="count++"
        class="rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        count is {{ count }}
      </button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a
        href="https://vuejs.org/guide/quick-start.html#local"
        target="_blank"
        rel="noopener noreferrer"
      >
        create-vue </a
      >, the official Vue + Vite starter
    </p>

    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vue Docs Scaling up Guide </a
      >.
    </p>

    <p class="text-gray-500">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>
