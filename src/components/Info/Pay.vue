<template>
  <div>
    <div>总数:<strong>{{cartInfos.total_nums}}</strong></div>
    <div>总价:<strong>{{cartInfos.total_price}}</strong></div>
    <button @click="clear_db" >清空购物车</button>
  </div>
</template>
<script>
export default {
  computed: {
    cartInfos () {
      console.log('getters', this.$store.state.cartInfos)
      return this.$store.getters.getInfos
    }
  },
  methods: {
    clear_db () {
      this.$store.dispatch('clear_db')
    }
  }
}
</script>
