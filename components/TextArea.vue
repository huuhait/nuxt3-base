<template>
  <textarea v-model="value" class="w-full bg-transparent focus:outline-none border rounded text-sm px-4 py-2 focus:border-blue-400" :placeholder="placeholder" :rows="rows" />
</template>

<script lang="ts">
import { Model, Options, Prop, Vue } from 'vue-property-decorator'

@Options({})
export default class Textarea extends Vue {
  @Prop() readonly placeholder!: string
  @Prop({ default: 4 }) readonly rows!: string

  @Model('modelValue') value!: string

  focused = false
}
</script>
