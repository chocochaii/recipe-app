<template>
  <v-layout justify-center align-center fill-height>
    <RecipeForm @submit="onSubmit" />
  </v-layout>
</template>

<script>
import RecipeForm from '~/components/form/RecipeForm'

export default {
  components: {
    RecipeForm
  },
  methods: {
    onSubmit (addedRecipe) {
      console.log('on add', addedRecipe)
    }
  }
}
</script>
