<template>
  <v-layout justify-center align-center fill-height>
    <RecipeForm :recipe="recipe" @submit="onSubmit" />
  </v-layout>
</template>

<script>
import RecipeForm from '~/components/form/RecipeForm'

export default {
  components: {
    RecipeForm
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
  },
  methods: {
    onSubmit (editedRecipe) {
      console.log('on edit', editedRecipe)
    }
  }
}
</script>
