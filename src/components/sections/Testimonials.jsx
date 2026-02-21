export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f3e4dd] text-center">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold">Customer Feedbacks</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <h4 className="mt-6 font-semibold">John Doe</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}