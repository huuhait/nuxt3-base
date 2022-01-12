<template>
  <div :class="['input border w-56 rounded text-sm text-gray-500 bg-gray-100 px-4 py-2', focused ? 'border-indigo-700' : 'border-gray-100' ]">
    <div v-if="$slots.prefix" class="input-prefix">
      <slot name="prefix" />
    </div>
    <input
      v-model="value"
      class="w-full h-full bg-transparent focus:outline-none"
      :type="type"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="focused = false"
    >
  </div>
</template>

<script lang="ts">
import { Model, Options, Prop, Vue } from 'vue-property-decorator'

@Options({})
export default class Input extends Vue {
  @Prop() readonly type!: string
  @Prop() readonly placeholder!: string

  @Model('modelValue') value!: string

  focused = false
}
</script>

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
