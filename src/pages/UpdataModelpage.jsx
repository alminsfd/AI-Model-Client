import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import useNormalAxios from '../hooks/useNormalAxios';
import Swal from 'sweetalert2';

const UpdataModelpage = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const instance = useNormalAxios()
    const handleFrom = (e) => {
        e.preventDefault()
        const model = e.target.name.value
        const framework = e.target.frameword.value
        const usecase = e.target.usecase.value
        const dataset = e.target.dataset.value
        const photo = e.target.photo.value
        const textfill = e.target.textfill.value

        const addModel = {
            name: model,
            framework: framework,
            useCase: usecase,
            dataset: dataset,
            description: textfill,
            image: photo,
            createdBy: user?.email,
            createdAt: new Date(),
            purchased: 0
        }



        instance.patch('/allmodels', addModel)
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "AI Model update Successful",
                        icon: "success",
                    });
                    navigate('/viewmodels')
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }

            })


    }
    return (
        <div className='flex flex-col items-center justify-center h-screen' >
            <form onSubmit={handleFrom} className="flex flex-col gap-3 max-w-sm bg-white p-6 rounded-2xl shadow-md border border-[#ddd] relative  ">
                <p className="text-3xl font-semibold text-sky-400 tracking-tight flex items-center pl-8 relative">
                    Add Model
                    <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-600"></span>
                    <span className="absolute left-0 w-4 h-4 rounded-full bg-blue-300 animate-ping"></span>
                </p>

                <p className="text-gray-600 text-sm">Give info and add your  favourite model </p>


                <label className=" w-full">
                    Model name:
                    <input
                        name="name"
                        required
                        type="text"
                        placeholder=" Enter your model name "
                        className="peer w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-cyan-500"
                    />
                </label>

                <label className="  w-full">
                    Framework name:
                    <input
                        name="frameword"
                        required
                        type="text"
                        placeholder=" Enter your framework name"
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
                    />
                </label>


                <label className="relative">
                    Use case:
                    <input
                        name="usecase"
                        required
                        type="text"
                        placeholder=" Enter your use case "
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
                    />

                </label>

                <label className="relative">
                    Dataset:
                    <input
                        name="dataset"
                        required
                        type="text"
                        placeholder=" Enter your dataset "
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
                    />

                </label>

                <label className="relative">
                    Photo Url
                    <input
                        name="photo"
                        required
                        type="url"
                        placeholder="  Enter your  photo url "
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer"
                    />
                </label>
                <label className="relative">
                    <input
                        name="textfill"
                        required
                        type="text"
                        placeholder="Add some description "
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 peer textarea textarea-md "
                    />
                </label>



                <button type="submit" className="border-none outline-none bg-cyan-500 text-white py-2 rounded-lg text-lg hover:bg-sky-700 cursor-pointer transition">Submit</button>


            </form>
        </div>
    );
};

export default UpdataModelpage;