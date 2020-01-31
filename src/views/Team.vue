<template>
  <div class="team">
    <h1>Team Page</h1>

    <v-container class="my-5">
      <!-- carrd -->
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 v-for="(pgn, index) in users" :key="index">
          <v-card text class="text-center ma-3">
            <v-responsive class="pt-4">
              <!-- avatar image -->
              <v-avatar color="orange" size="100" class="lighten-2">
                <span class="white--text headline">IMG</span>
              </v-avatar>
            </v-responsive>
            <v-card-text class="center">
              <div class="font-weight-medium">{{pgn.name}}</div>
              <div class="text-center">{{pgn.email}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-pencil</v-icon>
                <span>edit</span>
              </v-btn>
              <v-btn text color="grey">
                <v-icon small left>mdi-delete</v-icon>
                <span>delete</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- <ul>
        <li
          class="subtitle"
          v-for="(pgn, index) in users"
          v-bind:key="index"
        >{{pgn.name}} | {{pgn.email}}</li>
      </ul>-->
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      let ambil = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          // console.log(res.data);
          this.users = res.data;
        })
        .catch(err => {
          //console.log(err);
        });
    }
  }
};
</script>