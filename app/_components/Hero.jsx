import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            THE MOBILE YOU WANT.
            <strong className="font-extrabold text-[#08D9D6] sm:block">
              {" "}
              Is One Click Away{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Exploring the World of Mobile !
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-[#08D9D6] px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-[#08D9D6] shadow hover:text-teal-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
