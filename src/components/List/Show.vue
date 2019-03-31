<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(shop, index) in shop_list' :key="shop.id">
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>{{shop.num}}</td>
          <td>
            <button @click="add_db(shop, index)">{{shop.num? '+' : '加入购物车'}}</button>
            <button @click="reduce_db(shop)" v-if='shop.num'>{{'-'}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click='enterCart'>进入购物车</button>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      arr: [],
      shop_list: [{
        id: 1,
        name: '鱼香肉丝',
        price: 12
      }, {
        id: 2,
        name: '宫保鸡丁',
        price: 14
      }, {
        id: 3,
        name: '土豆丝',
        price: 10
      }, {
        id: 4,
        name: '米饭',
        price: 2
      }]
    }
  },
  computed: {
  },
  methods: {
    add_db (shop, shopindex) {
      this.$store.dispatch('check_db', shop)
      if (this.$store.state.curIndex === -1) {
        this.$set(this.shop_list[shopindex], 'num', 1)
        this.$store.dispatch('create_db', shop)
        // console.log(this.$store.state.cartList[0] === this.shop_list[shopindex])
      } else {
        this.$store.dispatch('add_db', this.$store.state.curIndex)
        // shop.num++
      }
    },
    reduce_db (shop, index) {
      this.$store.dispatch('check_db', shop)
      let vm = this
      this.$store.dispatch('reduce_db', vm.$store.state.curIndex)
      console.log('reduce', this.$store.state.cartList)
    },
    enterCart () {
      this.$router.push('/cart')
    }
  },
  mounted () {
    let a = this
    a.arr = this.$store.state.cartList
    this.shop_list.forEach(function (shop, index) {
      for (var i = 0; i < a.$store.state.cartList.length; i++) {
        if (a.$store.state.cartList[i].id === shop.id) {
          // a.$set(a.shop_list[index], 'num', a.$store.state.cartList[i].num)
          a.$set(a.shop_list, index, a.$store.state.cartList[i])
          // console.log(shop, a.$store.state.cartList[i], shop === a.$store.state.cartList[i])
        }
      }
    })
    // console.log(this.$store.state.cartList.length)
  }
}
</script>
