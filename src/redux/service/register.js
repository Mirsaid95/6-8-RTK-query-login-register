import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/crateBaseQuery";


export const registerApi = createApi({
    reducerPath: "registerApi",
    baseQuery: createBaseQuery(),

    endpoints: (build) => ({
        createRegister: build.mutation({
            query: (data) => ({
                url: "/user",
                method: "POST",
                body: data,
            })
        })
    })
})

export const { useCreateRegisterMutation } = registerApi;