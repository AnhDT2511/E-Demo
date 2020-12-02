import { anestAxios } from "@/libs/axios";
import { RESOURCE } from "@/services/api/resource";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

const api = RESOURCE.match;
@Module({
  namespaced: true,
  name: "match",
})
export default class MatchModule extends VuexModule {
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
  async upload(data: any) {
    const response = await anestAxios.post(`${api}`, data);
    return response.data;
  }
}
