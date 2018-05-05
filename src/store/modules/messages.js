import Vue from "vue";

// initial state
const state = {
  connect: false,
  messages: {}
};

// getters
const getters = {
  getMessages: state => state.messages
};

// actions
const actions = {
  socket_oscMessage: ({ commit, dispatch }, message) => {
    commit("MESSAGE", message);
  }
};

// mutations
const mutations = {
  SOCKET_CONNECT: (state, status) => {
    state.connect = true;
  },
  MESSAGE: (state, message) => {
    // The push() would not work here, because: https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
    // state.messages.push(message);
    console.log(message);
    Vue.set(state.messages, message.address, {
      data: message.data,
      config: message.config
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
