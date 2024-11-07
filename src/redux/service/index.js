import { phoneApi } from "./phones";
import { compApi } from "./computer";
import { registerApi } from "./register";
import { loginApi } from "./login";

export default [phoneApi, compApi,loginApi,registerApi];

export const serviceReducer = {
  [compApi.reducerPath]: compApi.reducer,
  [phoneApi.reducerPath]: phoneApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
};
