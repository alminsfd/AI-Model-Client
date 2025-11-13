


import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useNormalAxios from "../hooks/useNormalAxios";
import { useNavigate } from "react-router";
import { useState } from "react";

const Form = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const instance = useNormalAxios();
  const [load, setLoad] = useState(false);

  const handleFrom = (e) => {
    e.preventDefault();
    setLoad(true);

    const model = e.target.name.value;
    const framework = e.target.frameword.value;
    const usecase = e.target.usecase.value;
    const dataset = e.target.dataset.value;
    const photo = e.target.photo.value;
    const textfill = e.target.textfill.value;

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

    e.target.reset();
  };

  return (
    <form
      onSubmit={handleFrom}
      className="flex flex-col gap-4 max-w-sm mx-auto 
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
          required
          type="text"
          placeholder="Enter your model name"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Framework name:
        <input
          name="frameword"
          required
          type="text"
          placeholder="Enter your framework name"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Use case:
        <input
          name="usecase"
          required
          type="text"
          placeholder="Enter your use case"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Dataset:
        <input
          name="dataset"
          required
          type="text"
          placeholder="Enter your dataset"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Photo URL:
        <input
          name="photo"
          required
          type="url"
          placeholder="Enter your photo URL"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
      </label>

      <label className="w-full text-gray-800 dark:text-gray-200">
        Description:
        <input
          name="textfill"
          required
          type="text"
          placeholder="Add some description"
          className="w-full p-3 mt-1 border border-base-300 rounded-lg 
                     bg-base-100 text-gray-800 dark:text-gray-200 
                     outline-none focus:border-cyan-500"
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={load}
        className={`mt-2 py-2 rounded-lg text-lg font-medium text-white transition-all
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

