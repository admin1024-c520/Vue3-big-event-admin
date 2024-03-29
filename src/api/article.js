import request from '@/utils/request'
// 获取文章分类
export const artGetChannelsSerice = () => request.get('/my/cate/list')
// 添加文章分类
export const artAddChannelService = (data) => request.post('/my/cate/add', data)
// 编辑文章分类
export const artEditChannelService = (data) => request.put('/my/cate/info', data)
// 删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 获取文章列表
export const artGetArticleService = (params) =>
  request.get('/my/article/list', {
    params
  })
