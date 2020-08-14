import Ajax from '@/ajax/Ajax';
//接口请求函数
export const reqCategoryList = () => {
  return Ajax({
    url: '/product/getBaseCategoryList',
    method: 'GET'
  })
}

reqCategoryList();