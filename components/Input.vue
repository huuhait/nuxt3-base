<template>
  <div :class="['input border rounded text-sm px-4 py-2 transition-all', { '!border-blue-400': focused } ]">
    <div v-if="$slots.prefix" class="input-prefix">
      <slot name="prefix" />
    </div>
    <input v-model="value" class="w-full h-full bg-transparent focus:outline-none" :type="type" :placeholder="placeholder" @focus="focused = true" @blur="focused = false">
    <div v-if="$slots.suffix" class="input-suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>

<script lang="ts">
import { Model, Options, Prop, Vue } from 'vue-property-decorator'

@Options({})
export default class Input extends Vue {
  @Prop({ default: 'text' }) readonly type!: string
  @Prop() readonly placeholder!: string

  @Model('modelValue') value!: string

  focused = false
}
</script>

<style lang="less">
.input {
  display: flex;
  align-items: center;

  input {
    text-align: inherit;
  }

  &-prefix {
    display: inline-block;
    padding-right: 4px;
  }
  &-suffix {
    display: inline-block;
    padding-left: 4px;
  }
}
</style>
