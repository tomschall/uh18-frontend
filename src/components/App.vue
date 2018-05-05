<template>
  <v-app id="app" dark>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <OscList/>      
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>UH18 - #shipbeat</v-toolbar-title>
    </v-toolbar>
    
    <v-content>
      <v-container fixed fluid>
        <v-layout justify-center align-center>
          <v-flex>
            <MessageConfig/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&nbsp; &copy; toadtec 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import OscList from "./OscList.vue";
import MessageConfig from "./MessageConfig.vue";

export default {
  name: "app",
  data: () => ({
    drawer: true,
    selectedMessage: false
  }),
  components: {
    OscList,
    MessageConfig
  }
};
</script>

<style></style>
