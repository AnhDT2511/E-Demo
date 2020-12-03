import Vue from "vue";
import Vuex from "vuex";
import OCRModule from "./ocr/ocr.module";
import Match11Module from "./match11/match11.module";
import Match1nModule from "./match1n/match1n.module";
import GenderModule from "./gender/gender.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ocr: OCRModule,
    match11: Match11Module,
    match1n: Match1nModule,
    gender: GenderModule,
  },
});
