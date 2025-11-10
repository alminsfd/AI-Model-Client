import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-3 max-w-sm bg-white p-6 rounded-2xl shadow-md border border-[#ddd] relative  ">
      <p className="text-3xl font-semibold text-sky-400 tracking-tight flex items-center pl-8 relative">
        Add Model
        <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-600"></span>
        <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-300 animate-ping"></span>
      </p>

      <p className="text-gray-600 text-sm">Give info and add your  favourite model </p>

      <div className="flex gap-2 w-full">
        <label className="relative w-full">
          <input
            required
            type="text"
            placeholder=" "
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
          />
          <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-8 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-green-600">
            Model name
          </span>
        </label>

        <label className="relative w-full">
          <input
            required
            type="text"
            placeholder=" "
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
          />
          <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-8 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-green-600">
            Framework name
          </span>
        </label>
      </div>

      <label className="relative">
        <input
          required
          type="text"
          placeholder=" "
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
        <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-8 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-green-600">
          Use Case
        </span>
      </label>

      <label className="relative">
        <input
          required
          type="text"
          placeholder=" "
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
        <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-8 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-green-600">
          Dataset
        </span>
      </label>

      <label className="relative">
        <input
          required
          type="url"
          placeholder=" "
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
        />
        <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-8 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-green-600">
         Photo Url
        </span>
      </label>
      <label className="relative">
        <input
          required
          type="text"
          placeholder="Add some description "
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer textarea textarea-md "
        />
        <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-8 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-green-600">
         
        </span>
      </label>


      
      <button type="submit" className="border-none outline-none bg-cyan-500 text-white py-2 rounded-lg text-lg hover:bg-sky-700 cursor-pointer transition">Submit</button>

      
    </form>
  );
};

export default Form;
