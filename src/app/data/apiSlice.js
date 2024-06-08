import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/products?limit=75",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = api;
export default api;
