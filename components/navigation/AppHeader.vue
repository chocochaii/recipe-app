<template>
  <v-app-bar fixed app light>
    <a href="/" class="home">
      <v-toolbar-title v-text="title" />
    </a>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      title: 'Recipes'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: rgba(0, 0, 0, 0.87);
}
</style>
