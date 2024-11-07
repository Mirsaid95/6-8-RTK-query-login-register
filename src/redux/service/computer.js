import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/crateBaseQuery";

export const compApi = createApi({
  reducerPath: "computerApi",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getComputer: build.query({
      query: () => "/computer",
    }),
  }),
});

export const { useGetComputerQuery } = compApi;
