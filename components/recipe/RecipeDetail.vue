<template>
  <article class="recipe-detail">
    <v-card min-height="300px">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <div class="d-flex flex-column">
          <strong>Description:</strong>
          <span>{{ description }}</span>
          <br>
          <strong>Ingredients:</strong>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    ingredients: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.recipe-detail {
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
