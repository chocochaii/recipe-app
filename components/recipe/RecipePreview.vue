<template>
  <nuxt-link :to="disabled ? '' : `/recipes/${id}`">
    <article>
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            class="d-flex flex-column"
            min-height="200px"
            :elevation="hover ? 6 : 3"
            :disabled="disabled"
          >
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
              <div class="d-flex flex-wrap">
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
            <v-card-actions v-if="hover || $vuetify.breakpoint.mdAndDown">
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
                  <v-btn icon v-on="on" @click.prevent="confirmDelete">
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
  },
  data () {
    return {
      disabled: false
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
      this.$store.dispatch('deleteRecipe', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__title {
  text-transform: capitalize;
}
.v-card__text {
  text-transform: capitalize;
}
.v-card__actions {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
