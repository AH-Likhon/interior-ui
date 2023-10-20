import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SERVICE_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
    getAllService: build.query({
      query: (args) => ({
        url: SERVICE_URL,
        method: "GET",
        params: args,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),

    getSingleService: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
