import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "react-hook-form";
import { useMyForm } from "./CustomHooks/useMyForm";

type FormDataType = {
  name: string;
  email: string;
};

function App() {
  // const {register , handleSubmit , formState: {errors}}=useForm<FormDataType>({
  //   defaultValues: {

  //   }
  // });

  // const onSubmit=(data: FormDataType)=>{
  //   console.log(data);
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useMyForm<FormDataType>();

  const onSubmit = (data: FormDataType) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
        />
        {errors && <span style={{ color: "red" }}>{errors.name?.message}</span>}
        <input
          type="text"
          {...register("email", {
            required: { value: true, message: "this is required" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email",
            },
          })}
        />
        {errors && (
          <span style={{ color: "red" }}>{errors.email?.message}</span>
        )}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
