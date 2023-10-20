import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const categoryServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getByCategory: build.query({
      query: () => ({
        url: `/service/category`,
        method: "GET",
      }),
      //   transformResponse: (response: any, meta: IMeta) => {
      //     return {
      //       servicesCategory: response,
      //       meta,
      //     };
      //   },
      providesTags: [tagTypes.service],
    }),
  }),
});

export const { useGetByCategoryQuery } = categoryServiceApi;
