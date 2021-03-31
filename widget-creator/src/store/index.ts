import { createStore } from "vuex";
import getters from "./getters";
import state from "./state";

export default createStore({
  state,
  mutations: {
    showDemo(state, widgetName) {
      state.demo.visible[widgetName] = true;
    },
    hideDemo(state, widgetName) {
      state.demo.visible[widgetName] = false;
    },
    setActualCountdown(state, time) {
      state.demo.countdown = time;
    },
    toggleTimer(state, status) {
      state.demo.timer = status;
    }
  },
  actions: {
    showDemo({ commit }, widgetName) {
      commit("showDemo", widgetName);
    },
    hideDemo({ commit }, widgetName) {
      commit("hideDemo", widgetName);
    },
    setActualCountdown({ commit }, time) {
      commit("setActualCountdown", time);
    },
    toggleTimer({ commit }, status) {
      commit("toggleTimer", status);
    }
  },
  modules: {},
  getters
});
