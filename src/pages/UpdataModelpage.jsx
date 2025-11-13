
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useLoaderData, useNavigate } from 'react-router';
import useNormalAxios from '../hooks/useNormalAxios';
import Swal from 'sweetalert2';

const UpdataModelpage = () => {
  const Updatedetailspage = useLoaderData();
  const { _id, name, framework, useCase, dataset, description, image } = Updatedetailspage;
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

    instance.patch(`/allmodels/${_id}`, addModel)
    .then((data) => {
      if (data.data.modifiedCount) {
        Swal.fire({
          title: 'AI Model Updated Successfully!',
          icon: 'success',
          background: '#1e293b',
          color: '#e2e8f0',
        });
        navigate(`/viewmodels/${_id}`);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          background: '#1e293b',
          color: '#e2e8f0',
        });
      }
    })
    .finally(() => setLoad(false));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <form
        onSubmit={handleFrom}
        className="flex flex-col gap-3 max-w-sm w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 relative transition-all duration-300"
      >
        <p className="text-3xl font-semibold text-sky-400 tracking-tight flex items-center pl-8 relative">
          Update Model
          <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-600"></span>
          <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-300 animate-ping"></span>
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Update your existing model details below.
        </p>

        <label className="w-full text-gray-700 dark:text-gray-300">
          Model name:
          <input
            name="name"
            required
            type="text"
            defaultValue={name}
            className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none 
                       focus:border-cyan-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </label>

        <label className="w-full text-gray-700 dark:text-gray-300">
          Framework name:
          <input
            name="frameword"
            required
            type="text"
            defaultValue={framework}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none 
                       focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </label>

        <label className="w-full text-gray-700 dark:text-gray-300">
          Use case:
          <input
            name="usecase"
            required
            type="text"
            defaultValue={useCase}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none 
                       focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </label>

        <label className="w-full text-gray-700 dark:text-gray-300">
          Dataset:
          <input
            name="dataset"
            required
            type="text"
            defaultValue={dataset}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none 
                       focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </label>

        <label className="w-full text-gray-700 dark:text-gray-300">
          Photo URL:
          <input
            name="photo"
            required
            type="url"
            defaultValue={image}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none 
                       focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </label>

        <label className="w-full text-gray-700 dark:text-gray-300">
          Description:
          <textarea
            name="textfill"
            required
            defaultValue={description}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none 
                       focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 h-24 resize-none"
          />
        </label>

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
    </div>
  );
};

export default UpdataModelpage;
