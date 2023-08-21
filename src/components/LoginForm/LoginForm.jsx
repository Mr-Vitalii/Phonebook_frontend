import React from "react";
import {
  Button,
  Form,
  Input,
  Label,
  Div,
  AuthorizationSpan,
} from "./LoginForm.styled";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";


export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    dispatch(
      logIn({
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Fill in the field, please</p>}
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Fill in the field, please</p>}
      </Label>
      <Button type="submit">Log In</Button>
      <Div>
        <span>Don't have an account?</span>
        <AuthorizationSpan onClick={() => navigate("/register")}>
          Registration
        </AuthorizationSpan>
      </Div>
    </Form>
  );
};
