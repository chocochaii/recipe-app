<template>
  <nuxt-link :to="`/recipes/${id}`">
    <article>
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            class="d-flex flex-column"
            min-height="200px"
            :elevation="hover ? 6 : 3"
          >
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
            <v-spacer />
            <v-card-actions v-if="hover">
              <v-spacer />
              <nuxt-link :to="`/edit/${id}`">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                      <v-icon>edit</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit</span>
                </v-tooltip>
              </nuxt-link>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>delete</v-icon>
                  </v-btn>
                </template>
                <span>Delete</span>
              </v-tooltip>
            </v-card-actions>
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
