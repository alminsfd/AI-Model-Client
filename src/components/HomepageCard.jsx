import React from 'react';
import { Link } from 'react-router';

const HomepageCard = ({cards}) => {
    return (
        <div className="mx-auto max-w-7xl min-h-screen py-10 grid gap-y-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center my-20">
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
                                <span className="font-semibold">Brif:</span> {card.description.length>20?
                                card.description.slice(0,20)+'....':card.description}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-200">

                            <Link
                                to={`/viewmodels/${card._id}`}
                                className=" bg-cyan-500 hover:bg-sky-700 dark:hover:bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-semibold  transition-colors w-full text-center "
                            >
                                View Details
                            </Link>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomepageCard;

