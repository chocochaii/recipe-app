<template>
  <v-layout column justify-center align-center>
    <v-row>
      <v-col>
        <AppInput
          v-model.trim="title"
          placeholder="Recipe title"
        />
        <AppInput
          ref="ingredientInput"
          v-model.trim="ingredient"
          placeholder="Add an ingredient"
        />
        <AppButton
          :loading="isAdding"
          :disabled="!title || !ingredients.length"
          @click="onSubmit"
        >
          Add this recipe
        </AppButton>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import AppInput from '~/components/UI/AppInput'
import AppButton from '~/components/UI/AppButton'

export default {
  components: {
    AppInput,
    AppButton
  },
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
