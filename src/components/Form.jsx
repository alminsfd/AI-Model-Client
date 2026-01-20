


import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useNormalAxios from "../hooks/useNormalAxios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { user } = useAuth();
  const navigate = useNavigate();
  const instance = useNormalAxios();
  const [load, setLoad] = useState(false);

  const handleFrom = (data) => {
    setLoad(true);

    const model = data.name
    const framework = data.frameword
    const usecase = data.usecase
    const dataset = data.dataset
    const photo = data.photo
    const textfill = data.textfill

    const addModel = {
      name: model,
      framework: framework,
      useCase: usecase,
      dataset: dataset,
      description: textfill,
      image: photo,
      createdBy: user?.email,
      createdAt: new Date(),
      purchased: 0,
    };

    instance
      .post("/allmodels", addModel)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "AI Model added successfully!",
            icon: "success",
            draggable: true,
          });
          navigate("/viewmodels");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .finally(() => setLoad(false));
  };

  return (
    <form
      onSubmit={handleSubmit(handleFrom)}
      className="flex flex-col gap-4 w-full mx-auto 
                 bg-base-100 p-6 rounded-2xl shadow-md 
                 border border-base-300 transition-colors duration-300"
    >
      <p className="text-3xl font-semibold text-sky-500 dark:text-cyan-400 tracking-tight flex items-center pl-8 relative">
        Add Model
        <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-600"></span>
        <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-300 animate-ping"></span>
      </p>

      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Give info and add your favourite model
      </p>

      {/* Input fields */}
      <label className="w-full text-gray-800 dark:text-gray-200">
        Model name:
        <input
          name="name"
          type="text"
          placeholder="Enter your model name"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-600 text-sm" >Name is required</span>}
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Framework name:
        <input
          name="frameword"
          {...register("frameword", { required: true })}
          type="text"
          placeholder="Enter your framework name"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
        {errors.frameword && <span className="text-red-600 text-sm" > Framework is required</span>}
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Use case:
        <input
          name="usecase"
          {...register("usecase", { required: true })}
          type="text"
          placeholder="Enter your use case"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
        {errors.usecase && <span className="text-red-600 text-sm" > Usecase is required</span>}
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Dataset:
        <input
          name="dataset"
          {...register("dataset", { required: true })}
          type="text"
          placeholder="Enter your dataset"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
        {errors.dataset && <span className="text-red-600 text-sm" > Dataset is required</span>}
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Photo URL:
        <input
          name="photo"
          {...register("photo", { required: true })}
          type="url"
          placeholder="Enter your photo URL"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
        {errors.photo && <span className="text-red-600 text-sm" > Photo is required</span>}
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Description:
        <input
          name="textfill"
          {...register("textfill", { required: true })}
          type="text"
          placeholder="Add some description"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
      </label>
      {errors.photo && <span className="text-red-600 text-sm" > Description is required</span>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={load}
        className={`mt-2 py-2 rounded-lg text-lg font-medium text-white transition-all cursor-pointer
          ${load
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-cyan-500 hover:bg-sky-700 dark:hover:bg-cyan-400"}`}
      >
        {load ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default Form;

