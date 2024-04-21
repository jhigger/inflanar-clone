/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Section6 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2">
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-8 gap-x-8 gap-y-0 rounded-xl bg-gradient-to-tr from-sky-300 via-orange-100 to-violet-300 px-8 py-12">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="group col-span-1 rounded-lg bg-white p-8 transition-all duration-200 ease-in-out odd:mb-8 even:mt-8 hover:-translate-y-2"
                  >
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src="https://placehold.co/200x200?text=Image"
                        alt="icon"
                        className="size-20 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="space-x-2 text-4xl font-bold group-hover:text-primary">
                          <span>7</span>
                          <span>M+</span>
                        </div>
                        <span className="text-lg font-semibold">Followers</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="col-span-1 space-y-16">
            <div className="w-full max-w-xl text-4xl font-bold leading-normal">
              We Work with Brands that Influence{" "}
              <span className="text-primary">1000+ Clients</span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {Array(9)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="col-span-1">
                    <a href="#">
                      <img
                        src="https://placehold.co/150x50?text=Logo"
                        alt="logo"
                      />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
