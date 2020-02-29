<template>
  <v-layout justify-center align-center fill-height>
    <RecipeDetail
      :title="recipe.title"
      :description="recipe.description"
      :ingredients="recipe.ingredients"
    />
  </v-layout>
</template>

<script>
import RecipeDetail from '~/components/recipe/RecipeDetail'

export default {
  components: {
    RecipeDetail
  },
  data () {
    return {
      recipe: {
        id: 'rcp1',
        title: 'Cookie',
        description: 'A delicious cookie',
        ingredients: ['butter', 'milk', 'sugar']
      }
    }
  }
}
</script>
