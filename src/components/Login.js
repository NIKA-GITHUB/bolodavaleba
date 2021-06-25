import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/api";
import { useHistory } from "react-router";
import notAuthProtected from "../hoc/notAuthProtected";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = async (creds) => {
    console.log(creds);
    const res = await login(creds);
    if (res.token) {
      localStorage.setItem("auth.token", JSON.stringify(res.token));
      history.replace("/main");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      <input {...register("password")} />
      <input type="submit" />
    </form>
  );
};

export default notAuthProtected(Login);
