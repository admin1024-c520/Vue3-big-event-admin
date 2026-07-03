<script setup>
import { ref } from 'vue'
import { artGetChannelsSerice } from '@/api/article'

const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsSerice()
  channelList.value = (res.data.data || []).filter((item) => item.id ?? item.cate_id)
  console.log(channelList.value)
}
getChannelList()
</script>

<template>
  <el-select>
    <el-option
      v-for="item in channelList"
      :key="item.id ?? item.cate_id"
      :label="item.cate_name"
      :value="item.id ?? item.cate_id"
    ></el-option>
  </el-select>
</template>
