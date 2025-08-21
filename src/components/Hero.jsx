import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-[90vh] px-6 lg:px-20 bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Make The <span className="text-brand">Easiest Solution</span> For You
        </h1>

        <p className="text-lg lg:text-xl text-neutral-300 max-w-xl mx-auto lg:mx-0">
          At Powernest, we simplify technology for you! Get expert
          solutions tailored to your business needs with efficiency and
          innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a
            href="#get-started"
            className="px-6 py-3 rounded-xl bg-brand/20 text-brand border border-brand/30 hover:bg-brand/30 transition text-sm font-medium"
          >
            Get Started
          </a>
          <a
            href="tel:+19295412830"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition text-sm font-medium"
          >
            <Phone size={18} /> +19295412830
          </a>
        </div>
      </div>

      {/* Right Side Laptop Image */}
      <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
        <img
          src="https://kashiftechlabs.online/assets/general/images/Ph7kTCg55ISxqArcboWD.png"
          alt="Laptop Preview"
          className="w-full max-w-lg drop-shadow-2xl rounded-xl"
        />
      </div>
    </section>
  );
}
