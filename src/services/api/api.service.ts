import { anestAxios } from "@/libs/axios";

export const apiService = {
  query: (resource: string) => anestAxios.get(`${resource}`),

  get: (resource: string, slug: string) => anestAxios.get(`${resource}/${slug}`),

  post: (resource: string, params: object) => anestAxios.post(`${resource}`, params),

  put: (resource: string, slug: string, params: object) => anestAxios.put(`${resource}/${slug}`, params),

  delete: (resource: string, slug: string) => anestAxios.delete(`${resource}/${slug}`)
};
