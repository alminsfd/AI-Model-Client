

import React, { useEffect, useState } from 'react';
import useNormalAxios from '../hooks/useNormalAxios';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';
import Loader from '../features/Loader';

const Mymodelpage = () => {
  const instance = useNormalAxios();
  const { user } = useAuth();
  const [mydata, setMydata] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    if (user?.email) {
      instance
        .get(`/allmodels?email=${user.email}`)
        .then((res) => setMydata(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoad(false));
    }
  }, [user]);

  return load ? (
    <Loader />
  ) : (
    <div className="min-h-screen bg-base-200 py-10 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-base-100 rounded-2xl shadow-lg p-6 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-center text-cyan-600 dark:text-cyan-400 mb-8">
          My Uploaded AI Models
        </h1>

        {/* Empty state */}
        {mydata.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10">
            <p>No models found. Try adding one!</p>
          </div>
        ) : (
          <>
            {/* ✅ Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="table w-full table-zebra">
                <thead className="bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-200 text-cyan-800">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Framework</th>
                    <th>Use Case</th>
                    <th>Created By</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {mydata.map((data) => (
                    <tr
                      key={data._id}
                      className="hover:bg-cyan-50 dark:hover:bg-gray-700 transition-all"
                    >
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={data.image}
                                alt={data.name}
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-medium dark:text-white">{data.name}</td>
                      <td className="dark:text-gray-300">{data.framework}</td>
                      <td className="dark:text-gray-300">{data.useCase}</td>
                      <td className="dark:text-gray-300">{data.createdBy}</td>
                      <td>
                        <Link
                          to={`/viewmodels/${data._id}`}
                          className="btn btn-sm bg-cyan-500 text-white hover:bg-cyan-600 dark:hover:bg-cyan-400"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Mobile & Tablet Card View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
              {mydata.map((data) => (
                <div
                  key={data._id}
                  className="bg-base-100 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {data.name}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {data.framework}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Use Case:
                    </span>{' '}
                    {data.useCase}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Created By:
                    </span>{' '}
                    {data.createdBy}
                  </p>

                  <Link
                    to={`/viewmodels/${data._id}`}
                    className="btn btn-sm w-full bg-cyan-500 text-white hover:bg-cyan-600 dark:hover:bg-cyan-400"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mymodelpage;
