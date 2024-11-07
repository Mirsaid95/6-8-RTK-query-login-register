import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/crateBaseQuery";

export const phoneApi = createApi({
  reducerPath: "phonesApi",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getPhones: build.query({
      query: () => "/phones",
    }),
  }),
});

export const { useGetPhonesQuery } = phoneApi;
