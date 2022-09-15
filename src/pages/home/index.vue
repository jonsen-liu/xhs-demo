<template>
  <view>home - test</view>
</template>

<script>

export default {
  name: 'HomeIndex',
  components: {
  },
  data () {
    return {

    }
  },
  computed: {
    code () {
      return this.$store.state.code
    },
    cityInfo () {
      return this.$store.state.cityInfo
    },
    copyRight () {
      return this.$store.state.copyRight
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    videoId () {
      return this.$store.state.dyVideoId
    }
  },
  mounted () {
    console.log('mounted 10')
    console.log(this)
  }
}
</script>
