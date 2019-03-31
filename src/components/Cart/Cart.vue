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
          <th>总价</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop, index) in cartList" :key="shop.id">
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>{{shop.num}}</td>
          <td>
            <button @click="add_db(index)">{{shop.num? '+': ''}}</button>
            <button @click="reduce_db(index)" v-if="shop.num != 0">{{'-'}}</button>
            <button @click="delete_db(index)" v-if="shop.num != 0">{{'delete'}}</button>
          </td>
          <td>{{shop.num*shop.price}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="returnMenu">返回菜单页</button>
      <button @click="enter">结算账单</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cartList: this.$store.state.cartList
    }
  },
  methods: {
    returnMenu () {
      this.$router.push('/')
      // history.go(-1)
    },
    enter () {
      this.$router.push('/pay')
    },
    add_db (index) {
      this.$store.dispatch('add_db', index)
    },
    reduce_db (index) {
      this.$store.dispatch('reduce_db', index)
    },
    delete_db (index) {
      this.$store.dispatch('delete_db', index)
    }
  },
  mounted () {
    // console.log(this.$store.state.cartList)
  }
}
</script>
