<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-8">
    <div class="flex gap-8">
      <a
        href="https://vite.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/vite.svg"
          class="transition-filter h-24 p-6 duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
          alt="Vite logo"
        />
      </a>

      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./assets/vue.svg"
          class="transition-filter h-24 p-6 duration-300 hover:drop-shadow-[0_0_2em_#42b883aa]"
          alt="Vue logo"
        />
      </a>
    </div>

    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
