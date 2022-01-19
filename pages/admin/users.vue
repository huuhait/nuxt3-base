<script setup lang="ts">
const columns = [
  { key: 'id', title: 'ID' },
  { key: 'email', title: 'Email' },
  { key: 'created_at', title: 'Created At' },
]
</script>

<template>
  <Table :columns="columns" :data-source="[{ id: 1, email: 'huuhadz2k@gmail.com', created_at: 'Today' }]">
  </Table>
</template>
