import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/booking";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBooking: build.query({
      query: (args) => ({
        url: BOOKING_URL,
        method: "GET",
        params: args,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    getSingleBooking: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    updateBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} = bookingApi;
