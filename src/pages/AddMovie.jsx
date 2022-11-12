import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReusableButton from "../components/ReusableButton";

const AddMovie = () => {
  const { register, handleSubmit } = useForm();

  const sendForm = (formularyData) => {
    const formData = new FormData();
    formData.append("title", formularyData.title);
    formData.append("director", formularyData.title);
    formData.append("year", formularyData.title);
    formData.append("genre", formularyData.title);
    formData.append("description", formularyData.title);
    formData.append("image", formularyData.title);

    console.log(formularyData);
  };
  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <label>
        Title
        <input type="text" {...register("title", { required: true })} />
      </label>
      <label>
        Director
        <input type="text" {...register("director", { required: false })} />
      </label>
      <label>
        Year
        <input type="text" {...register("year", { required: false })} />
      </label>
      <label>
        Image
        <input type="file" {...register("image", { required: true })} />
      </label>
      <label>
      Genre
        <input type="text" {...register("genre")} />
      </label>
      <label>
        Description
        <input type="text" {...register("description", { required: false })} />
      </label>
      <ReusableButton
        size="l"
        color="white"
        text="ENVIAR"
      ></ReusableButton>
    </form>
  );
};

export default AddMovie;
