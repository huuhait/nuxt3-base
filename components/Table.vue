<script setup lang="ts">
interface TableColumn {
  key: string
  title: string
  align?: 'left' | 'center' | 'right'
  scopedSlots?: boolean
}

withDefaults(defineProps<{
  columns: TableColumn[]
  dataSource: any[]
}>(), {
  columns: () => [] as TableColumn[],
  dataSource: () => [] as any[],
})
</script>

<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th v-for="column in columns" :key="column.key" scope="col" :class="[column.key, 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider']">
                  {{ column.title }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in dataSource" :key="index">
                <template v-for="column in columns" :key="column.key">
                  <td :class="[column.key, 'px-6 py-4 whitespace-nowrap']">
                    <slot v-if="column.scopedSlots" :name="column.key" :item="item" :column="column" />
                    <template v-else>
                      {{ item[column.key] }}
                    </template>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
