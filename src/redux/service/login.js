import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/crateBaseQuery";


export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: createBaseQuery(),

    endpoints: (build) => ({
        createUserLogin: build.mutation({
            query: (data) => {
             return{
                url: "/login",
                method: "POST",
                body: data,
             }   
            }
        })
    })
})

export const { useCreateUserLoginMutation } = loginApi;