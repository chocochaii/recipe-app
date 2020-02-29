<template>
  <v-layout>
    <RecipeList :recipes="recipes" />
    <nuxt-link to="/add">
      <v-btn
        fab
        fixed
        large
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
  data () {
    return {
      recipes: [
        {
          id: 'rcp1',
          title: 'Cookie',
          description: 'A delicious cookie',
          ingredients: ['butter', 'milk', 'sugar']
        },
        {
          id: 'rcp2',
          title: 'Cookie',
          description: 'A delicious cookie',
          ingredients: ['butter', 'milk', 'sugar']
        },
        {
          id: 'rcp3',
          title: 'cookie',
          description: 'A delicious cookie',
          ingredients: ['butter', 'milk', 'sugar']
        },
        {
          id: 'rcp4',
          title: 'Cookie',
          description: 'A delicious cookie',
          ingredients: ['butter', 'milk', 'sugar']
        },
        {
          id: 'rcp5',
          title: 'Cookie',
          description: 'A delicious cookie',
          ingredients: ['butter', 'milk', 'sugar']
        },
        {
          id: 'rcp6',
          title: 'Cookie',
          description: 'A delicious cookie',
          ingredients: ['butter', 'milk', 'sugar']
        },
        {
          id: 'rcp7',
          title: 'Cookie',
          description: 'A delicious cookie',
          ingredients: ['butter', 'milk', 'sugar']
        }
      ]
    }
  }
}
</script>
