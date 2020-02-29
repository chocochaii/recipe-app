<template>
  <v-card width="100%" max-width="400px" :elevation="3">
    <v-card-title class="justify-center">
      Add the recipe
    </v-card-title>
    <v-card-text>
      <v-text-field v-model.trim="title" label="Recipe title" />
      <v-textarea
        v-model.trim="description"
        label="Description"
        rows="1"
        auto-grow
      />
      <v-combobox
        v-model="ingredients"
        label="Add ingredient(s)"
        multiple
        chips
        deletable-chips
        hint='Press "Enter" key to separate each ingredient'
      />
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
        :loading="isAdding"
        :disabled="!title || !description || !ingredients.length"
        @click="onSubmit"
      >
        Add this recipe
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
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
          description: this.description,
          ingredients: this.ingredients
        })
        this.isAdding = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-input {
  .v-select__slot {
    .v-input__append-inner {
      display: none;
    }
  }
}
</style>
