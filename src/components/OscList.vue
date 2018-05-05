<template>
  <v-list two-line dense>
    <v-list-tile @click="showMessageConfig(key)" class="messages" v-for="(value, key, index) in messages" :key="index" ripple avatar>
      <v-list-tile-action v-if="!value.config">
        <v-icon>lightbulb_outline</v-icon>
      </v-list-tile-action>
      <v-list-tile-action v-else>
        <v-icon>check_circle</v-icon>        
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{key}}</v-list-tile-title>
        <v-list-tile-sub-title v-if="value.config">
          Ch: {{value.config ? value.config['midiChannel'] : null}}, 
          CC: {{value.config ? value.config['midiController']: null}}
        </v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-list-tile-action-text>{{Number(value.data[0]).toFixed(4)}}</v-list-tile-action-text>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";

import store from "../store";

export default {
  name: "OscList",
  computed: mapGetters({
    messages: "getMessages"
  }),
  methods: {
    showMessageConfig: function(messageKey) {
      // @todo: get config from mongodb (via websockets or an API)

      // @todo: show form (filled if config found, otherwise empty)
      this.$root.selectedMessage = messageKey;
      console.log(messageKey);
    }
  }
};
</script>

<style scoped></style>
