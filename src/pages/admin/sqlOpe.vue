<script setup lang="ts">
const indexMethod = (index: number) => {
  return ++index
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
<div class="bg-cyan-800 w-screen h-screen">
<!--  banner-->
  <div class="flex flex-col w-3/5 sql-wrapper">
    <div class="sql-banner">
      <button class="sql-button">增加</button>
      <button class="sql-button">删除</button>
      <button class="sql-button">修改</button>
      <button class="sql-button">查询</button>
    </div>
    <div class="">
      <el-table :data="tableData" stripe style="width: 100%;background:#334D66">
        <el-table-column type="index" :index="indexMethod" />
        <el-table-column prop="date" label="roleName"/>
        <el-table-column prop="name" label="power"/>
      </el-table>
    </div>
  </div>
</div>
</template>

<style scoped>
.sql-wrapper {
  margin: 0 auto;
}
.sql-banner {
  @apply border-solid px-8 py-2 border-2 border-neutral-800 mt-20
  flex flex-col justify-center md:gap-20 gap-6 md:flex-row
}
.sql-button {
  @apply p-2 px-6 border-2 border-emerald-700 hover:border-emerald-700
  focus:outline-none bg-emerald-700 duration-300
}
</style>
