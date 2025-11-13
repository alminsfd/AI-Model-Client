

import React from "react";
import { Link } from "react-router";


const Card = ({ cards }) => {
  console.log(cards);
  return (
    <>

      {
        cards.length === 0 ? <p className="text-center max-h-screen mt-20 text-5xl text-gray-600  font-medium " > Opps  ,  No AI Models Founds</p> :
          <div className="mx-auto py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {cards.map((card) => (
              <div
                key={card._id}
                className="w-[340px] bg-linear-to-bl from-cyan-100 via-sky-300 to-teal-400  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-white">
                    {card.name}
                  </h2>

                  <div className="text-white mt-2 space-y-1">
                    <p className="text-sm">
                      <span className="font-semibold">Framework:</span> {card.framework}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Use Case:</span> {card.useCase}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-200">

                    <Link
                      to={`/viewmodels/${card._id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                    <Link to='/' className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" >Go back</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
      }

    </>

  );
};

export default Card;
