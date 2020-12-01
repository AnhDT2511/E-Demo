import { anestAxios } from "@/libs/axios";

const api = "/api/match11";
class Match11Service {
  constructor() {
    console.log("creating new instance of match11.service");
  }

  submitFile(data: any) {
    return anestAxios.post(`${api}`, data);
  }
}

// Export a singleton instance in the global namespace
export const match11Service = new Match11Service();
