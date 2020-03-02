<template>
  <v-layout justify-center align-center fill-height>
    <RecipeList :recipes="recipes" />
    <nuxt-link to="/add">
      <v-btn
        color="primary"
        fab
        fixed
        bottom
        right
      >
        <v-icon>add</v-icon>
      </v-btn>
    </nuxt-link>
  </v-layout>
</template>

<script>
import RecipeList from '~/components/recipe/RecipeList'

export default {
  components: {
    RecipeList
  },
  computed: {
    recipes () {
      return this.$store.getters.loadedRecipes
    }
  }
}
</script>
