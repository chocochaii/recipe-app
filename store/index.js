import Vuex from 'vuex'
import { fireDb, firebase } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedRecipes: []
    },
    mutations: {
      setRecipes (state, recipes) {
        state.loadedRecipes = recipes
      },
      addRecipe (state, recipe) {
        state.loadedRecipes.push(recipe)
      },
      editRecipe (state, editedRecipe) {
        const recipeIndex = state.loadedRecipes.findIndex(
          recipe => recipe.id === editedRecipe.id
        )
        state.loadedRecipes[recipeIndex] = editedRecipe
      },
      deleteRecipe (state, id) {
        const recipeIndex = state.loadedRecipes.findIndex(
          recipe => recipe.id === id
        )
        state.loadedRecipes.splice(recipeIndex, 1)
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return vuexContext.dispatch('getRecipes', context)
          .then((recipes) => {
            vuexContext.dispatch('setRecipes', recipes)
          })
      },
      async getRecipes (vuexContext, context) {
        const recipes = []
        try {
          const snap = await fireDb
            .collection('recipes')
            .orderBy('createdAt')
            .get()
          snap.forEach((doc) => {
            recipes.push({
              id: doc.id,
              ...doc.data()
            })
          })
        } catch (e) {
          // eslint-disable-next-line
          console.log('Error: getRecipes', e)
        }
        return recipes
      },
      setRecipes (vuexContext, recipes) {
        vuexContext.commit('setRecipes', recipes)
      },
      async addRecipe (vuexContext, recipe) {
        try {
          const ref = await fireDb
            .collection('recipes')
            .add({
              createdAt: firebase.firestore.Timestamp.now(),
              ...recipe
            })
          const addedRecipe = {
            id: ref.id,
            ...recipe
          }
          vuexContext.commit('addRecipe', addedRecipe)
          return { data: addedRecipe }
        } catch (e) {
          return { error: e }
        }
      },
      async editRecipe (vuexContext, editedRecipe) {
        const { id, ...data } = editedRecipe
        try {
          await fireDb
            .collection('recipes')
            .doc(id)
            .update({ ...data })
          vuexContext.commit('editRecipe', editedRecipe)
          return { data: editedRecipe }
        } catch (e) {
          return { error: e }
        }
      },
      async deleteRecipe (vuexContext, id) {
        try {
          await fireDb
            .collection('recipes')
            .doc(id)
            .delete()
          vuexContext.commit('deleteRecipe', id)
          return { data: id }
        } catch (e) {
          return { error: e }
        }
      }
    },
    getters: {
      loadedRecipes (state) {
        return state.loadedRecipes
      }
    }
  })
}

export default createStore
