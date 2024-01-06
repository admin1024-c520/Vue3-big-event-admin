<script setup>
// 在 Vue3 Composition API 中
// 1. 获取路由对象 router useRouter
//    const router = useRouter()
// 2. 获取路由参数 route useRoute
//    const route = useRoute()
import { useRouter, useRoute } from 'vue-router'
import { useUserStore, useCountStore } from '@/stores'
const router = useRouter()
const route = useRoute()

const goList = () => {
  console.log(router, route)
  router.push('/list')
}

const userStore = useUserStore()
const countStore = useCountStore()
</script>

<template>
  <div>
    <hr />
    <router-view></router-view>
    <hr />
    <hr />
    <hr />
    我是App
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳列表页</el-button>

    <button>123</button>
    <el-button type="primary" @click="goList">123</el-button>

    <p>{{ userStore.token }}</p>
    <el-button type="primary" @click="userStore.setToken('Bearer sidfhheiwhuvyweqrjh')">
      登录
    </el-button>
    <el-button type="primary" @click="userStore.removeToken()"> 退出 </el-button>

    <hr />
    {{ countStore.count }}
    <el-button type="primary" @click="countStore.add(1)"> 加一 </el-button>
  </div>
</template>

<style scoped></style>
