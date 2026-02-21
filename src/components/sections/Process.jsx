export default function Process() {
  return (
    <section className="bg-[#f3dedd] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold">Our Delivery Process</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          
          <div className="rounded-xl overflow-hidden border-4 border-red-400">
            <img src="/images/process1.jpg" alt="" />
          </div>

          <div className="rounded-xl overflow-hidden border-4 border-red-400">
            <img src="/images/process2.jpg" alt="" />
          </div>

          <div className="rounded-xl overflow-hidden border-4 border-red-400">
            <img src="/images/process3.jpg" alt="" />
          </div>

          <div className="rounded-xl overflow-hidden border-4 border-red-400">
            <img src="/images/process4.jpg" alt="" />
          </div>

        </div>
      </div>
    </section>
  );
}