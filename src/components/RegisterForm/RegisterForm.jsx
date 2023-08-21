import React from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  Div,
  AuthorizationSpan,
} from "./RegisterForm.styled";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";



export const RegisterForm = () => {

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
          registration({
            name: data.username,
            email: data.email,
            password: data.password,
          })
        );
        reset();
      navigate("/login");
       toast.success(`You have successfully registered!`, {
         duration: 3000,
       });
    };
    
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Username
          <Input
            type="text"
            name="username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p>Fill in the field, please</p>
          )}
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p>Fill in the field, please</p>
          )}
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p>Fill in the field, please</p>
          )}
        </Label>
        <Button type="submit">
          Register
        </Button>
        <Div>
          <span>Do you already have an account?</span>
          <AuthorizationSpan onClick={()=> navigate("/login")}>Authorization</AuthorizationSpan>
        </Div>
      </Form>
    </>
  );
}
