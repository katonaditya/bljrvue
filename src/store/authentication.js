import Vue from 'vue';

const api = Vue.prototype.api;

export default {
  namespaced: true,
  state: {
    login: false,
  },
  mutations: {
    login: async (state, payload) => {
      try {
        console.log(payload);
        if (payload.username === "usr" && payload.password === "pwd") {
          state.login = true;
        } else {
          
        }
      } catch (error) {
          console.log("Try Catch -- Err");
        // state.error = error;
      }
    },
    logout: (state) => {
      state.login = false;
    }, 

  },
  getters: {
    // error: state => state.error,
    login: state => {
      return state.login;
    },
  },
};