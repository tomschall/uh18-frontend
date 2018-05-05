<template>
   <v-form> <!-- v-if="$root.selectedMessage" -->
      <v-container fluid>
        <v-layout row wrap>
            <v-flex xs6 class="px-5">
                <v-layout row wrap>
                    <v-flex>
                        <h1 class="headline">OSC2Midi Mapping</h1>
                        <v-subheader>Select MIDI targets for selected OSC message</v-subheader>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-subheader>Midi Channel</v-subheader>
                    </v-flex>
                    <v-flex xs6>
                    <v-select
                        :items="midiChannels"
                        v-model="midiChannel"
                        label="Select"
                        single-line
                        ></v-select>
                    </v-flex>

                    <v-flex xs6>
                        <v-subheader>Midi Controller</v-subheader>
                    </v-flex>
                    <v-flex xs6>
                    <v-select
                        :items="midiControllers"
                        v-model="midiController"
                        label="Select"
                        single-line
                        ></v-select>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs6>
                <v-layout row wrap>
                    <v-flex class="px-5">
                        Chart?
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";

import store from "../store";

export default {
  name: "MessageConfig",
  computed: mapGetters({
    message: "getMessageConfig"
  }),
  data() {
    return {
      midiChannel: null,
      midiChannels: Array.apply(null, { length: 16 }).map(Number.call, Number),
      midiController: null,
      midiControllers: Array.apply(null, { length: 128 }).map(
        Number.call,
        Number
      )
    };
  },
  methods: {
    saveMessageConfig: function(formData) {
      // @todo: send config to server (via websockets or an API) to persist
    }
  }
};
</script>

<style scoped></style>
