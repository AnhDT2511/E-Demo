import Vue from "vue";
import Vuex from "vuex";
import CourseModule from "./course/course.module";
import Match11Module from "./match11/match11.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    course: CourseModule,
    match11: Match11Module,
  },
});
