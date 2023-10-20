import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/reviews";
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    findReview: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${REVIEW_URL}/get/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    getAllReviews: build.query({
      query: () => ({
        url: `${REVIEW_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    createReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useFindReviewQuery,
  useCreateReviewMutation,
  useGetAllReviewsQuery,
} = reviewApi;
