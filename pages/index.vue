<template>
  <v-layout column justify-center align-center>
    <RecipeForm />
    <RecipeList :recipes="recipes" />
  </v-layout>
</template>

<script>
import RecipeForm from '~/components/form/RecipeForm'
import RecipeList from '~/components/recipe/RecipeList'

export default {
  components: {
    RecipeForm,
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
