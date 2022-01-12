<script setup lang="ts">
const headers = useRequestHeaders()
const organization = await useFetch('https://api.github.com/orgs/nuxt')
const repos = await useFetch('https://api.github.com/orgs/nuxt/repos')
</script>

<template>
  <div>{{ organization }}
  {{ repos }}
  </div>
  <div>{{ organization }}
  {{ repos }}</div>
</template>
