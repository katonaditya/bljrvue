import Vue from 'vue';
import idb from '@/api/database';
const api = Vue.prototype.api;

export default {
  namespaced: true,
  state: {
    login: false,
    users: [],
  },
  mutations: {
    login: async (state, payload) => {
      const pass = payload.password;
      const pwd = localStorage.getItem(payload.username)
      try {
        console.log(pass); console.log(pwd);
        // console.log(localStorage.getItem(name));
        if(pass === pwd) {
          state.login = true;
        }
        // const result = await api.post('/auth', payload);
        // const { token } = result.data.data;
        // localStorage.setItem('steamdom:token', token);
        // window.location="";
        // state.login = true;
      } catch (error) {
          console.log("Try Catch -- Err");
        // state.error = error;
      }
    },
    logout: (state) => {
      state.login = false;
      localStorage.removeItem('steamdom:token');
    },
    register:  async (state, payload) => {
      try {
        const name = payload.username;
        const pwd = payload.password
        
        JSON.stringify(localStorage.setItem(name, pwd))
        console.log("tambah user" + name + " " + pwd);
        
        // co(payload.username)
        // console.log(payload);
        // await idb.saveUser(payload);

      } catch (error) {
          console.log("Try Catch -- Err");
        // state.error = error;
      }
    }

  },
  getters: {
    // error: state => state.error,
    login: state => {
      return state.login;
    },
  },
  actions: {
    async saveUser(context, cat) {
      await idb.saveCat(cat);
    }
  }
};