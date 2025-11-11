

import React from "react";
import { Link } from "react-router";

const Card = ({ cards }) => {
  return (
    <div className="mx-auto py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
      {cards.map((card) => (
        <div
          key={card._id}
          className="w-[320px] bg-linear-to-br from-cyan-600 to-sky-500 shadow-lg hover:shadow-2xl rounded-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full h-[220px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              src={card.image}
              alt={card.name}
            />
          </div>

          <h2 className="text-center text-white font-bold text-2xl mt-4">
            {card.name}
          </h2>

          <div className="text-white/90 space-y-1 mt-3">
            <p className="text-sm">
              <span className="font-semibold">Framework:</span> {card.framework}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Use Case:</span> {card.useCase}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Link
              to={`/viewmodels/${card._id}`}
              className="px-6 py-2 rounded-full text-white font-semibold bg-linear-to-r from-cyan-400 to-sky-400 hover:from-cyan-500 hover:to-sky-500 transition-all duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
