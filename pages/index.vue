<template>
  <v-layout column justify-center align-center>
    <v-row>
      <v-col>
        <v-text-field v-model.trim="title" label="Recipe title" />
        <v-text-field v-model.trim="ingredient" label="Add an ingredient" />
        <v-btn
          :loading="isAdding"
          :disabled="!title || !ingredients.length"
          @click="onSubmit"
        >
          Add this recipe
        </v-btn>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      ingredient: '',
      ingredients: [],
      isAdding: false
    }
  },
  methods: {
    onSubmit () {
      this.isAdding = true
      setTimeout(() => {
        console.log('Added', {
          title: this.title,
          ingredients: this.ingredients
        })
        this.isAdding = false
      }, 2000)
    }
  }
}
</script>
