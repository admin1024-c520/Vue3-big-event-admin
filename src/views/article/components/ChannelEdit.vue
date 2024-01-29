<script setup>
import { ref } from 'vue'
import { artAddChannelService, artEditChannelService } from '@/api/article.js'
import { ElMessage } from 'element-plus'
const dialogVisible = ref(false)
const formRef = ref()
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = {
  cate_name: [
    { required: true, message: '分类名称不能为空', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名称只能由字母、数字、下划线组成，且不能超过10个字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '分类别名不能为空', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名只能由字母、数字组成，且不能超过15个字符',
      trigger: 'blur'
    }
  ]
}
const emit = defineEmits(['success'])
const onsubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id ? true : false
  if (isEdit) {
    await artEditChannelService(formModel.value)
    ElMessage.success('修改成功')
  } else {
    await artAddChannelService(formModel.value)
    ElMessage.success('添加成功')
  }

  // 关闭弹窗
  dialogVisible.value = false
  emit('success')
}
// 组件对外暴露一个方法 open，基于open传来的参数，区分添加还是编辑
// open（{}） => 表单无需渲染，说明是添加
// open({ id， cate_name， ...}） => 表单需要渲染，说明是编辑
// open调用后，可以打开弹窗

const open = (row) => {
  console.log(row)
  dialogVisible.value = true
  formModel.value = { ...row }
}

// 向外暴露方法
defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formModel.id ? '编辑分类' : '添加分类'"
    size="small"
    width="30%"
  >
    <el-form
      :model="formModel"
      :rules="rules"
      ref="formRef"
      :label-width="100"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="formModel.cate_name" placeholder="请输入分类名称"></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="formModel.cate_alias" placeholder="请输入分类别名"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onsubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
