import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative bg-[#f3e4dd] py-28 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/images/pattern.jpg')] bg-center bg-cover"></div>

      <Container>
        <div className="relative text-center max-w-2xl mx-auto">
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Services
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>
      </Container>
    </section>
  );
}