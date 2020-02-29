<template>
  <nuxt-link :to="`/recipes/${id}`">
    <article>
      <v-hover>
        <template v-slot="{ hover }">
          <v-card min-height="200px" :elevation="hover ? 6 : 3">
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
              <div class="d-flex">
                <v-chip
                  v-for="ingredient in ingredients"
                  :key="ingredient"
                  :ripple="false"
                  class="ma-1"
                >
                  {{ ingredient }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-hover>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
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
