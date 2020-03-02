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
      this.$store.dispatch('addRecipe', addedRecipe)
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
