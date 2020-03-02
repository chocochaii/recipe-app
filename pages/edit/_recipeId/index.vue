<template>
  <v-layout justify-center align-center fill-height>
    <RecipeForm :recipe="recipe" @submit="onSubmit" />
  </v-layout>
</template>

<script>
import RecipeForm from '~/components/form/RecipeForm'
import { fireDb } from '~/plugins/firebase'

export default {
  components: {
    RecipeForm
  },
  asyncData (context) {
    return fireDb
      .collection('recipes')
      .doc(context.params.recipeId)
      .get()
      .then((ref) => {
        if (ref.data() === undefined) {
          context.error({ statusCode: 404, message: 'Recipe not found :(' })
        }
        return {
          recipe: {
            id: ref.id,
            ...ref.data()
          }
        }
      })
  },
  methods: {
    onSubmit (editedRecipe) {
      this.$store.dispatch('editRecipe', editedRecipe)
        .then(({ data, error }) => {
          if (error) {
            // eslint-disable-next-line
            console.log(`Error: ${error}`)
          } else {
            this.$router.push(`/recipes/${data.id}`)
          }
        })
    }
  }
}
</script>
