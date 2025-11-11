import React, { useEffect, useState } from 'react';

import { Link, useLoaderData, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useNormalAxios from '../hooks/useNormalAxios';
import Swal from 'sweetalert2';
const Deatilspage = () => {
    const { user } = useAuth()
    const instance = useNormalAxios()
    const [isCreator, setIsCreator] = useState(false)
    const Detailsdata = useLoaderData()
    const navigate=useNavigate()
    const { createdBy, dataset, description, framework, image,
        name, purchased, useCase, _id
    } = Detailsdata
    useEffect(() => {
        console.log(user);
        if (user?.email === createdBy) {
            setIsCreator(true)
        }
    }, [user, createdBy])

    const PurchaseInfo = {
        name,
        framework,
        useCase,
        dataset,
        description,
        image,
        createdBy,
        purchaseBy: user?.email,
        model_id:_id
    }


    const handlepurchase = () => {
        instance.post('/purchase', PurchaseInfo)
            .then((data) => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Successfully purchase",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }


            })

    }

    const handleDelete = () => {
        instance.delete(`/allmodels/${_id}`)
            .then(data => {
                if (data.data.deletedCount) {
                    Swal.fire({
                        title: "Successfully delete Model",
                        icon: "success",
                    });
                    navigate('/viewmodels')
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }

            })
    }



    return (
        <div className="min-h-screen bg-linear-to-b from-sky-50 to-cyan-100 flex justify-center items-center py-16 px-4">
            <div className="max-w-5xl w-full bg-blue-200 shadow-2xl rounded-3xl p-8 lg:flex gap-10">
                {/* Image Section */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={image}
                        alt=''
                        className="rounded-3xl w-[380px] h-[300px] object-cover shadow-lg border border-gray-200"
                    />
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-5">
                    <h1 className=" text-3xl mt-3 md:text-4xl font-bold text-gray-800">{name}</h1>
                    <p className="text-gray-700 leading-relaxed">{description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                            <p className="font-semibold text-gray-800">Framework</p>
                            <p className="text-gray-600">{framework}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                            <p className="font-semibold text-gray-800">Use Case</p>
                            <p className="text-gray-600">{useCase}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                            <p className="font-semibold text-gray-800">Dataset</p>
                            <p className="text-gray-600">{dataset}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                            <p className="font-semibold text-gray-800">Purchased Count</p>
                            <p className="text-gray-600">
                                Purchased {purchased} times
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-wrap gap-4 mt-8">
                        {
                            isCreator ? (
                                <>
                                    <Link to={`/updatemodel/${_id}`} className="px-6 py-3 rounded-xl border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition">Edit</Link>

                                    <button onClick={handleDelete} className="px-6 py-3 rounded-xl border-2 border-red-500 text-red-600 font-semibold hover:bg-red-50 transition">Delete</button>
                                </>
                            ) :
                                <button
                                    onClick={handlepurchase}
                                    className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-sky-600 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-sky-700 transition"
                                >
                                    Purchase Model
                                </button>

                        }
                        <Link to='/viewmodels' className='  px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-sky-600 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-sky-700 transition ' > Go Back</Link>


                    </div>

                    <div className="mt-6 text-sm text-gray-500">
                        Created by: <span className="font-medium">{createdBy}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


;

export default Deatilspage;