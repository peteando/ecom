export default function About() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg">
              Trusted Local Plumbers Servicing Melbourne and Surrounds
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Over 20 Years of Experience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At <span className="font-semibold text-blue-800">Swift Plumbing</span>, we’re proud to be a family-owned business delivering
                reliable plumbing solutions across Melbourne. Whether it’s a leaky tap or a full
                bathroom renovation, our licensed plumbers get the job done right the first time.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We’re known for our honest advice, affordable pricing, and high-quality workmanship.
                No job is too big or too small – we treat every customer like family.
              </p>
            </div>
  
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/plumber2.png"
                alt="Plumber working on a pipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  