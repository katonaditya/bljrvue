<template>
  <v-container v-show="showLogin" class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="black" dark flat>
            <v-toolbar-title>Please Login</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text>
            <v-form @submit.prevent="handleLogin()">
              <v-text-field
                color="red"
                rounded
                label="Username"
                v-model="username"
                prepend-icon="mdi-account-circle"
                type="text"
              />

              <v-text-field
                rounded
                :type="showPassword ? 'text':'password'"
                label="Password"
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="!showPassword ? 'mdi-eye':'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="handleLogin()" type="submit" color="black white--text" rounded>Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      showLogin: true,
      showPassword: false,
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      console.log('meow-- handleLogin() trigerred');
      this.login({ username: this.username, password: this.password });
    },
    // kirim data login ke authentication.js 
    ...mapMutations("authentication", ["login"])
  }
};
</script>