import React from 'react';

export default function SuccessStories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-violet-900">Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Got my new ute financed fast — made it so much easier to get to jobs and grow the business."
            </p>
            <h3 className="text-xl font-semibold text-violet-700">Dave, Plumber - Geelong</h3>
          </div>

          {/* Story 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Upgraded my tools and trailer thanks to their help — smooth process, no dramas."
            </p>
            <h3 className="text-xl font-semibold text-violet-700">Jess, Electrician - Bendigo</h3>
          </div>

          {/* Story 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Needed a new van for bigger jobs — quick approval and they actually understood what tradies need."
            </p>
            <h3 className="text-xl font-semibold text-violet-700">Mick, Carpenter - Ballarat</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
