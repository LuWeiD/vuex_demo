export default {
  getInfos (state) {
    var cartList = state.cartList
    state.cartInfos.total_nums = 0
    state.cartInfos.total_price = 0
    for (var i = 0; i < cartList.length; i++) {
      state.cartInfos.total_nums += cartList[i].num
      state.cartInfos.total_price += cartList[i].num * cartList[i].price
    }
    return state.cartInfos
  }
}
