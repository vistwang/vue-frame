
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      lists: []
    },
    mutations: {
      add (state) {
        state.lists.push({
            name: '111',
            age: 26
        })
      }
    }
});
