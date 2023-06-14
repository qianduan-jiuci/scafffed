<script setup lang="ts">
import {reactive} from "vue";
interface Login {
  account: string,
  pwd: string
}


let login = reactive<Login>({
  account: 'admin',
  pwd: '123456'
})

</script>

<template>
  <div class="overflow-hidden wrapper">
    <!--  登录-->
    <div class="bg-white w-[720px] rounded drop-shadow-md flex gap-4 m-10  justify-center -translate-y-1/4 md:translate-y-0">
      <!--form表单-->
      <div class="flex flex-col flex-1 px-4 pt-8 pb-0 my-6 text-[var(--color)] md:px-16">
        <h1 text="2xl center">会员登录</h1>
        <div class="flex flex-col gap-6 mt-10">

          <base-input placeholder="请输入用户" v-model="login.account"/>
          <base-input type="password" placeholder="请输入密码" v-model="login.pwd"/>

          <div>
            <button class="w-full py-2 text-white transition duration-500 bg-indigo-600 hover:bg-emerald-700">登录</button>
          </div>

          <div class="flex justify-center gap-2 text-sm -translate-y-1/2">
            <a href="javascript:;">网站首页</a>
            <a href="javascript:;">记住密码</a>
            <a href="javascript:;">忘记密码</a>
          </div>
        </div>
      </div>
      <!--  图片区域  -->
      <div class="hidden md:block">
        <img src="../../assets/login-logo.jpg" alt=""
             class="object-cover cursor-pointer h-96">
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply w-screen bg-[#c2cede] h-screen flex justify-center items-center
}

</style>
