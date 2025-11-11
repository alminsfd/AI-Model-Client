

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
            title: "AI Model add Successful",
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
      className="flex flex-col gap-3 max-w-sm bg-white p-6 rounded-2xl shadow-md border border-[#ddd] relative"
    >
      <p className="text-3xl font-semibold text-sky-400 tracking-tight flex items-center pl-8 relative">
        Add Model
        <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-600"></span>
        <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-300 animate-ping"></span>
      </p>

      <p className="text-gray-600 text-sm">
        Give info and add your favourite model
      </p>

      <label className="w-full">
        Model name:
        <input
          name="name"
          required
          type="text"
          placeholder="Enter your model name"
          className="peer w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-cyan-500"
        />
      </label>

      <label className="w-full">
        Framework name:
        <input
          name="frameword"
          required
          type="text"
          placeholder="Enter your framework name"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
      </label>

      <label className="relative">
        Use case:
        <input
          name="usecase"
          required
          type="text"
          placeholder="Enter your use case"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
      </label>

      <label className="relative">
        Dataset:
        <input
          name="dataset"
          required
          type="text"
          placeholder="Enter your dataset"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
      </label>

      <label className="relative">
        Photo URL:
        <input
          name="photo"
          required
          type="url"
          placeholder="Enter your photo URL"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
      </label>

      <label className="relative">
        Description:
        <input
          name="textfill"
          required
          type="text"
          placeholder="Add some description"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
      </label>

      
      <button
        type="submit"
        disabled={load}
        className={`border-none outline-none text-white py-2 rounded-lg text-lg cursor-pointer transition 
          ${
            load
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-sky-700"
          }`}
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
