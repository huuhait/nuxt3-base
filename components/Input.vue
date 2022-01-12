<script setup lang="ts">
withDefaults(defineProps<{
  type?: string
  placeholder?: string
}>(), {
  type: 'text',
})

const focused = ref(false)
</script>

<template>
  <div :class="['input border rounded text-sm px-4 py-2', { 'border-blue-400': focused } ]">
    <div v-if="$slots.prefix" class="input-prefix">
      <slot name="prefix" />
    </div>
    <input class="w-full h-full bg-transparent focus:outline-none" :type="type" :placeholder="placeholder" @focus="focused = true" @blur="focused = false">
  </div>
</template>

<style lang="less">
.input {
  display: flex;
  align-items: center;

  &-prefix {
    display: inline-block;
    padding-right: 4px;
  }
}
</style>
