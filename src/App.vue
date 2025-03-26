<script setup lang="ts">
import { RouterView } from 'vue-router'

const route = useRoute()

useHead({
  title: () => route.meta.title || 'Vue Calculator',
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title,
    },
    {
      name: 'twitter:title',
      content: () => route.meta.title,
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap');

:root {
  /* Dark theme */
  --dark-bg: #17171C;
  --dark-button: #2E2F38;
  --dark-operator: #4B5EFC;
  --dark-function: #4E505F;
  --dark-text: #FFFFFF;

  /* Light theme */
  --light-bg: #F1F2F3;
  --light-button: #FFFFFF;
  --light-operator: #4B5EFC;
  --light-function: #4E505F;
  --light-text: #000000;

  /* Default theme (dark) */
  --bg: var(--dark-bg);
  --button: var(--dark-button);
  --operator: var(--dark-operator);
  --function: var(--dark-function);
  --text: var(--dark-text);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

body {
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s;
}

body.light-theme {
  --bg: var(--light-bg);
  --button: var(--light-button);
  --operator: var(--light-operator);
  --function: var(--light-function);
  --text: var(--light-text);
}
</style>