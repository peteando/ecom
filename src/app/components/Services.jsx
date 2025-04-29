import { FaToilet, FaTools, FaWater, FaShower, FaWrench } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaToilet className="text-4xl text-blue-600" />,
      title: "Blocked Drains",
      description: "We clear blocked toilets, sinks, and drains fast and efficiently.",
    },
    {
      icon: <FaShower className="text-4xl text-blue-600" />,
      title: "Hot Water Systems",
      description: "Repair or replace your electric, gas, or solar hot water systems.",
    },
    {
      icon: <FaWater className="text-4xl text-blue-600" />,
      title: "Burst Pipes",
      description: "Emergency burst pipe repairs to prevent water damage.",
    },
    {
      icon: <FaTools className="text-4xl text-blue-600" />,
      title: "General Plumbing",
      description: "All plumbing maintenance, repairs, and installations handled professionally.",
    },
    {
      icon: <FaWrench className="text-4xl text-blue-600" />,
      title: "Toilet Repairs",
      description: "Fix leaking, broken, or constantly running toilets.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Plumbing Services</h2>
        <p className="text-gray-600 mb-12">Reliable. Affordable. Local.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
