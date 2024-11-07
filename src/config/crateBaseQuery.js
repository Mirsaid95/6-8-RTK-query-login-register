import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadState } from "./storage";


export const createBaseQuery = () => {
    return fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        headers: {
            Authorization: `Bearer ${loadState("user")?.accessToken}`,
        }
    })
}