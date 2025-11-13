

import React from 'react';

const AImodels = () => {
  return (
    <div>
      <section className="bg-linear-to-r from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 mt-20 transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-6">
            About AI Models
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <span className="font-semibold">Artificial Intelligence (AI) models</span> are systems designed to learn from data and make intelligent decisions.
            They can identify patterns, predict outcomes, and even generate creative
            content like text or images.

            <br /><br />

            One of the most powerful types of AI models is the
            <span className="font-semibold text-blue-700 dark:text-blue-400"> Neural Network</span>,
            which mimics how the human brain processes information. These models are
            widely used in real-world applications such as
            <span className="text-blue-700 dark:text-blue-400 font-medium"> chatbots</span> (like ChatGPT),
            <span className="text-blue-700 dark:text-blue-400 font-medium"> image recognition</span>,
            speech assistants, and
            <span className="text-blue-700 dark:text-blue-400 font-medium"> recommendation systems</span>.

            <br /><br />

            AI models are transforming industries by making systems faster,
            smarter, and more efficient.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AImodels;
