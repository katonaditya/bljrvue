<template>
  <v-app>
    
    <v-content class="mx-8 my-8" v-if="login">
      <NavBar />
      <router-view></router-view>
    </v-content>
    <Login v-else/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Login from './components/Login'

import { mapGetters } from 'vuex';


export default {
  name: "App",

  components: {
    NavBar, Login
  },

  data: () => ({
    
  }),

  computed: {
    ...mapGetters('authentication', ['login']),
  },
};
</script>
