<script setup lang="ts">
const foo = 'bar'
</script>

<template>
  <header>
    {{ foo }}
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    ...
  </footer>
</template>
