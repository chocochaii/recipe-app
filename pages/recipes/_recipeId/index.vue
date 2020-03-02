<template>
  <v-layout justify-center align-center fill-height>
    <RecipeDetail
      :title="recipe.title"
      :description="recipe.description"
      :ingredients="recipe.ingredients"
    />
    <v-speed-dial
      v-model="fab"
      fixed
      right
      bottom
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">
            close
          </v-icon>
          <v-icon v-else>
            more_vert
          </v-icon>
        </v-btn>
      </template>
      <nuxt-link :to="`/edit/${recipe.id}`">
        <v-btn fab dark small color="green">
          <v-icon>edit</v-icon>
        </v-btn>
      </nuxt-link>
      <v-btn fab dark small color="red" @click="confirmDelete">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-layout>
</template>

<script>
import RecipeDetail from '~/components/recipe/RecipeDetail'
import { fireDb } from '~/plugins/firebase'

export default {
  components: {
    RecipeDetail
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
  data () {
    return {
      fab: false
    }
  },
  methods: {
    confirmDelete (e) {
      const confirm = window.confirm('Are you sure?\n\nDo you really want to delete this recipe?\nThis process cannot be undone.')
      if (confirm) {
        this.deleteRecipe()
      }
    },
    deleteRecipe () {
      this.disabled = true
      this.$store.dispatch('deleteRecipe', this.recipe.id)
        .then(({ data, error }) => {
          if (error) {
            // eslint-disable-next-line
            console.log(`Error: ${error}`)
          } else {
            this.$router.push('/')
          }
        })
    }
  }
}
</script>
