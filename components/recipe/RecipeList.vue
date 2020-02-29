<template>
  <section>
    <v-row>
      <v-col
        v-for="recipe in recipes"
        :key="recipe.id"
        xs="12"
        sm="6"
        md="6"
        lg="4"
        xl="3"
      >
        <RecipePreview
          :id="recipe.id"
          :title="recipe.title"
          :ingredients="recipe.ingredients"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import RecipePreview from '~/components/recipe/RecipePreview'

export default {
  components: {
    RecipePreview
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
}
</script>
