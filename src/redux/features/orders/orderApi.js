import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/orders`,
    credentials: "include",
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
      }),
    }),

    getOrdersByEmail: (builder.query)({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ["Orders"],
    }), // Add a comma here

    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"], // Invalidate cache to refresh the list
    }),
  }),

    
  });



export const { useCreateOrderMutation, useGetOrdersByEmailQuery,useDeleteOrderMutation } = ordersApi;

export default ordersApi;

