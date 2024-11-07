import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useCreateUserLoginMutation } from "../redux/service/login";
import { createUser } from "../redux/reducer/user-reducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginMutationFn] = useCreateUserLoginMutation();

  const submit = (data) => {
    loginMutationFn(data)
      .unwrap()
      .then((res) => {
        if (res) {
          dispatch(createUser(res));
          navigate("/app", { replace: true });
          toast.success(`Welcome back ${res.user.name}`);
        }else{
          toast.error("User information is incomplete.");
        }
      })
      .catch((error) => toast.error(error?.data?.message || "Login failed"));

    reset();
  };

  return (
    <>
      <div className="max-w-[1240px] mx-auto">
        <Link to={"/register"}>Register</Link>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mt-[20px]">
            <input
              className="p-[10px] w-full"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="mt-[20px]">
            <input
              className="p-[10px] w-full"
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};
