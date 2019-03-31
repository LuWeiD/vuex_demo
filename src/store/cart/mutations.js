import * as types from './mutations_types'

export default {
  [types.CHECK_DB] (state, payload) {
    state.curIndex = -1
    for (let i = 0; i < state.cartList.length; i++) {
      if (state.cartList[i].id === payload.id) {
        state.curIndex = i
        break
      }
    }
    // console.log(state.curIndex)
  },
  // 如果数组中没有该元素是则在数组末尾添加新元素
  [types.CREATE_DB] (state, payload) {
    state.cartList.push(payload)
    // console.log(state.cartList)
  },
  [types.ADD_DB] (state, index) {
    state.cartList[index].num = state.cartList[index].num + 1
    // 思考： 此时我们将store.state中的对象num增加，
    // 为什么页面上的shop_list中的num页面触发更新???????? 地址传值？？？
  },
  [types.REDUCE_DB] (state, index) {
    state.cartList[index].num = state.cartList[index].num - 1
    if (state.cartList[index].num === 0) {
      state.cartList.splice(index, 1)
    }
  },
  [types.DELETE_DB] (state, index) {
    state.cartList.splice(index, 1)
  },
  [types.CLEAR_DB] (state, payload) {
    state.cartList.splice(0)
  },
  [types.UPDATE_DB] (state, payload) {
    localStorage.setItem('vuex_cart', JSON.stringify(state.cartList))
  }
}
