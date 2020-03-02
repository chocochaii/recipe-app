<template>
  <v-layout :fill-height="!recipes.length">
    <div v-if="recipes.length" class="d-flex flex-grow-1">
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
    </div>
    <div v-else class="d-flex flex-grow-1 flex-column justify-center align-center fill-height">
      No recipes yet. Be the first one!
      <nuxt-link to="/add">
        <v-btn class="my-3" color="primary">
          Add the recipe
        </v-btn>
      </nuxt-link>
    </div>
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
  },
  head () {
    return {
      title: 'All recipes'
    }
  }
}
</script>
