import React from 'react';

import caude from '../assets/caude.jpg';
const Deatilspage = () => {
    
    return (
        <div className="min-h-screen bg-linear-to-b from-sky-50 to-cyan-100 flex justify-center items-center py-16 px-4">
            <div className="max-w-5xl w-full bg-blue-200 shadow-2xl rounded-3xl p-8 lg:flex gap-10">
                {/* Image Section */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={caude}
                        alt=''
                        className="rounded-3xl w-[380px] h-[300px] object-cover shadow-lg border border-gray-200"
                    />
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-5">
                    <h1 className="text-4xl font-bold text-gray-800">Claud</h1>
                    <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit commodi molestias dolores nobis qui cupiditate, facilis quisquam provident adipisci repudiandae iste obcaecati totam animi in doloremque amet voluptate? Illo.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                            <p className="font-semibold text-gray-800">Framework</p>
                            <p className="text-gray-600">TensorFlow</p>
                        </div>

                        <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                            <p className="font-semibold text-gray-800">Use Case</p>
                            <p className="text-gray-600">NLP</p>
                        </div>

                        <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                            <p className="font-semibold text-gray-800">Dataset</p>
                            <p className="text-gray-600">Wikipedia</p>
                        </div>

                        <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-100">
                            <p className="font-semibold text-gray-800">Purchased Count</p>
                            <p className="text-gray-600">
                                Purchased 3 times
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <button
                           
                            className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-sky-600 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-sky-700 transition"
                        >
                            Purchase Model
                        </button>

                       
                            <>
                                <button
                                    className="px-6 py-3 rounded-xl border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition"
                                >
                                    Edit
                                </button>

                                <button
                                    className="px-6 py-3 rounded-xl border-2 border-red-500 text-red-600 font-semibold hover:bg-red-50 transition"
                                >
                                    Delete
                                </button>
                            </>
                        
                    </div>

                    <div className="mt-6 text-sm text-gray-500">
                        Created by: <span className="font-medium">Al Amin</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


;

export default Deatilspage;