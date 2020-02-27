<template>
  <v-app>
    <AppHeader />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '~/components/navigation/AppHeader'
import AppFooter from '~/components/navigation/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
