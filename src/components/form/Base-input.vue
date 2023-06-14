<script setup lang="ts">
interface Input {
  placeholder?: string
  type?: string
  modelValue?: string
}

const props = withDefaults(defineProps<Input>(), {placeholder: '请输入内容',type:'text', modelValue: ''})


</script>

<template>
    <input :type="props.type"
           :value="props.modelValue"
           class="scaffed-input"
           :placeholder="props.placeholder"
           @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

</template>

<style scoped>

.scaffed-input {
  @apply grow  text-inherit bg-white rounded p-1.5  outline-none w-full
  border-2 border-solid border-gray-300
  box-border
  focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:border-white duration-300
}

</style>
