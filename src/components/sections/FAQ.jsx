import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    "How do I pack?",
    "Will you unpack my stuff?",
    "Can I pay by credit card?",
    "What items are prohibited?",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-bold">Frequently Asked Question</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <span>{q}</span>
                <ChevronDown size={18} />
              </div>

              {open === i && (
                <p className="text-sm text-gray-600 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}