<template>
  <nav>
    <v-app-bar app dark flat color="#303030">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- drop down menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text rounded v-on="on" class="mr-2">
            <v-icon left>mdi-arrow-down-drop-circle-outline</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- tombol logout -->
      <v-btn @click="logout()" rounded >
        <v-icon>mdi-arrow-right-bold-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="#303030">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar color="red" size="100" class="lighten-2">
            <span class="white--text headline">IMG</span>
          </v-avatar>
          <p class="white--text subheading mt-1">Account Name</p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home-circle", text: "Dashboard", route: "/" },
        { icon: "mdi-code-array", text: "My Project", route: "/projects" },
        { icon: "mdi-football-helmet", text: "Team", route: "/team" }
      ]
    };
  },
  methods: {
    logout() {
      this.$router.push("/");
    },
    // kirim data login ke authentication.js
    ...mapMutations("authentication", ["logout"])
  }
};
</script>