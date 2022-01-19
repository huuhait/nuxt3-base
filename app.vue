<script setup lang="ts">
import '~/assets/styles/index.less'

const route = useRoute()

const isAdmin = computed(() => {
  return route.path.includes('/admin')
})
</script>

<template>
  <Layout>
    <Header v-if="!isAdmin" />
    <LayoutContent>
      <NuxtPage />
    </LayoutContent>
    <Footer v-if="!isAdmin" />
  </Layout>
</template>
