<script setup>
import { ref } from 'vue'
import { artGetChannelsSerice } from '@/api/article'

const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsSerice()
  channelList.value = res.data.data
  console.log(channelList.value)
}
getChannelList()
</script>

<template>
  <el-select>
    <el-option
      v-for="item in channelList"
      :key="item.id"
      :label="item.cate_name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>
