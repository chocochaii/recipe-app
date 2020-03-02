<template>
  <section class="d-flex flex-grow-1 fill-height">
    <v-row v-if="recipes.length">
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
    <div v-else class="d-flex flex-grow-1 flex-column justify-center align-center">
      No recipes yet. Be the first one!
      <nuxt-link to="/add">
        <v-btn class="my-3" color="primary">
          Add the recipe
        </v-btn>
      </nuxt-link>
    </div>
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
