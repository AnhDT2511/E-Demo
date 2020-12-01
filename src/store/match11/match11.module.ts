import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { match11Service } from "@/services/match11/match11.service";

@Module({
  namespaced: true,
  name: "match11",
})
export default class Match11Module extends VuexModule {
  // State
  response = null;

  // Getters
  get getResponse() {
    return this.response;
  }

  // Mutations
  @Mutation
  setResponse(data: any): void {
    this.response = data;
  }

  // Actions
  @Action({ commit: "setResponse", rawError: true })
  async fetch(data: any) {
    const response = await match11Service.submitFile(data);
    return response.data;
  }
}
