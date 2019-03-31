export default {
  // 购物车列表
  // cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cart')) : [],
  cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cart')) : [],
  // localStorage中只能从存储字符串，如果要存储对象需要事先转化为字符串形式，通过JSON的序列化方法
  curIndex: -1,
  cartInfos: {
    total_nums: 0,
    total_price: 0
  }
  // 当前购物车信息
  // cartInfos: {
  //   total_price: 0,
  //   total_nums: 0
  // },
  // // 当前菜品是否在购物车的状态。在则是对应的索引，不在则是-1
  // curIndex: -1,
}
