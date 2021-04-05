import { createStore } from "vuex";
import getters from "./getters";
import state from "./state";

export default createStore({
  state,
  mutations: {
    toggleDemo(state, widgetInfo) {
      state.demo.visible[widgetInfo.name] = widgetInfo.status;
    },
    setActualCountdown(state, time) {
      state.demo.countdown = time;
    },
    toggleTimer(state, status) {
      state.demo.timer = status;
    },
    stopAnimationDemoBtn(state) {
      state.demo.btnClickStatus = true;
    }
  },
  actions: {
    toggleDemo({ commit }, widgetInfo) {
      commit("toggleDemo", widgetInfo);
    },
    setActualCountdown({ commit }, time) {
      commit("setActualCountdown", time);
    },
    toggleTimer({ commit }, status) {
      commit("toggleTimer", status);
    },
    stopAnimationDemoBtn({ commit }, status) {
      commit("stopAnimationDemoBtn", status);
    }
  },
  modules: {},
  getters
});
