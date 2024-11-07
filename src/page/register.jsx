import React from "react";
import { useForm } from "react-hook-form";
import { useCreateRegisterMutation } from "../redux/service/register";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  const [createMutationFn] = useCreateRegisterMutation();
  const submit = (data) => {
    createMutationFn(data)
      .then((res) => {
        if (data) {
          navigate("/login");
        }
        reset();
      });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <input type="text"
            placeholder="Name" 
            {...register("name")} />
          </div>
          <div>
            <input type="email"
            placeholder="Email"
            {...register("email")} />
          </div>
          <div>
            <input
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
