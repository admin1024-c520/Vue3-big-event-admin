<script setup>
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelSelect from './components/ChannelSelect.vue'
import { artGetArticleService } from '@/api/article'
import { formatTime } from '@/utils/format.js'

const articleList = ref([])
const total = ref(0)

const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})

const getArticleList = async () => {
  const res = await artGetArticleService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  console.log(res.data)
}
getArticleList()

// 编辑逻辑
const onEditArticle = (row) => {
  console.log(row)
}
// 删除逻辑
const onDeleteArticle = (row) => {
  console.log(row)
}
</script>
<template>
  <page-container title="文章管理">
    <template #extra>
      <el-button>添加文章</el-button>
    </template>
    <!-- 表单区域 -->
    <el-form inline>
      <el-form-item label="文章分类">
        <ChannelSelect></ChannelSelect>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select>
          <el-option>1</el-option>
          <el-option>1</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 数据表格区域 -->
    <el-table :data="articleList" :bordered="true">
      <el-table-column label="文章标题" prop="title">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="cate_name"></el-table-column>
      <el-table-column label="发表时间" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state"></el-table-column>
      <el-table-column label="操作" prop="state">
        <template #default="{ row }">
          <el-button
            circle
            plain
            type="primary"
            :icon="Edit"
            @click="onEditArticle(row)"
          ></el-button>
          <el-button
            circle
            plain
            type="danger"
            :icon="Delete"
            @click="onDeleteArticle(row)"
          ></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="暂无数据"></el-empty>
      </template>
    </el-table>
  </page-container>
</template>

<style lang="scss" scoped></style>
