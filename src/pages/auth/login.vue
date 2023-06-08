<script setup lang="ts">
import {reactive} from "vue";
interface Login {
  account: string,
  pwd: string
}

const {account, pwd} = reactive<Login>({
  account: 'admin',
  pwd: '123456'
})
</script>

<template>
  <div class="wrapper overflow-hidden">
    <!--  登录-->
    <div class="bg-white w-[720px] rounded drop-shadow-md flex justify-between gap-4">
      <!--form表单-->
      <div class="flex flex-col flex-1 px-20 py-8 text-[var(--color)]">
        <h1 text="2xl center">会员登录</h1>
        <div class="flex flex-col gap-8 mt-5">
          <input type="text"
                 class="scaffed-input"
                 placeholder="请输入账户"
                 v-model="account" />
          <input type="password"
                 class="scaffed-input"
                 placeholder="请输入账户"
                 v-model="pwd" />
        </div>
      </div>
      <!--  图片区域  -->
      <div>
        <img src="../../assets/login-logo.jpg" alt=""  class="object-cover cursor-pointer h-96">
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-screen bg-[#c2cede] h-screen flex justify-center items-center
}
.scaffed-input {
  @apply text-inherit bg-white rounded p-1.5 w-full outline-none
    border-2 border-solid border-gray-300
    box-border
    focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:border-white duration-300
}

</style>
