import Vue from "vue";
import Vuex from "vuex";
import Match11Module from "./match11/match11.module";
import MatchModule from "./match/match.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    match11: Match11Module,
    match: MatchModule,
  },
});
