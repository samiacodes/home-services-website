import { Home, Map, Building2, Truck } from "lucide-react";

export default function SolutionsSection() {
  const services = [
    {
      title: "Local Moving",
      description: "Enter the description enter the description",
      icon: Home,
    },
    {
      title: "Long Distance Moving",
      description: "Enter the description enter the description",
      icon: Map,
    },
    {
      title: "Commercial Moving",
      description: "Enter the description enter the description",
      icon: Building2,
    },
    {
      title: "Truck Rental",
      description: "Enter the description enter the description",
      icon: Truck,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Solutions tailored to your needs
          </h2>

          <p className="mt-6 text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          <button className="mt-8 bg-red-200 text-gray-900 px-6 py-3 rounded-md shadow-sm hover:bg-red-300 transition">
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-red-400 rounded-xl p-6 hover:shadow-lg transition duration-300"
              >
                <Icon className="text-red-500 mb-4" size={40} />

                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>

                <div className="mt-4 w-8 h-8 rounded-full border border-red-400 flex items-center justify-center text-red-500">
                  →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}