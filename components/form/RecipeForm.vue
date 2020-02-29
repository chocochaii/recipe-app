<template>
  <v-card width="100%" max-width="400px" :elevation="3">
    <v-card-title class="justify-center">
      {{ $route.params.recipeId ? "Edit" : "Add" }} the recipe
    </v-card-title>
    <v-card-text>
      <v-text-field v-model.trim="editedRecipe.title" label="Recipe title" />
      <v-textarea
        v-model.trim="editedRecipe.description"
        label="Description"
        rows="1"
        auto-grow
      />
      <v-combobox
        v-model="editedRecipe.ingredients"
        label="Add ingredient(s)"
        multiple
        chips
        deletable-chips
        hint='Press "Enter" key to separate each ingredient'
      />
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
        :loading="isLoading"
        :disabled="isFormCompleted"
        @click="onSubmit"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: false,
      default: null
    }
  },
  data () {
    return {
      editedRecipe: this.recipe
        ? { ...this.recipe }
        : {
          title: '',
          description: '',
          ingredients: []
        },
      isLoading: false
    }
  },
  computed: {
    isFormCompleted () {
      return (
        !this.editedRecipe.title ||
        !this.editedRecipe.description ||
        (this.editedRecipe.ingredients && !this.editedRecipe.ingredients.length)
      )
    }
  },
  methods: {
    onSubmit () {
      this.isLoading = true
      setTimeout(() => {
        this.$emit('submit', { ...this.editedRecipe })
        this.isLoading = false
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
