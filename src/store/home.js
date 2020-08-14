import { reqCategoryList } from '@/api';

//存储数据
const state = {
  categoryList: []
}
const mutations = {
  //直接修改data数据
  RECEIVECATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
}
//一般定义方法
const actions = {
  async getCatgoryList({ commit }) {
    const result = await reqCategoryList()
    if (result.code === 200) {
      //调用RECEIVECATEGORYLIST 这个函数，将result.data参数传递过去
      commit('RECEIVECATEGORYLIST', result.data)
    }
  }
}
//计算方法
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}