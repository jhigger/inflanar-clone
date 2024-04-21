/* eslint-disable @next/next/no-img-element */

import { cn } from "~/lib/utils";

const steps = [
  {
    image: "https://placehold.co/250x200?text=Image",
    title: "Create Camping",
    description:
      "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincid unt sem, id sagittis nibh.",
  },
  {
    image: "https://placehold.co/250x200?text=Image",
    title: "Choose Influencer",
    description:
      "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincid unt sem, id sagittis nibh.",
  },
  {
    image: "https://placehold.co/250x200?text=Image",
    title: "Monitor Your Campaign",
    description:
      "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincid unt sem, id sagittis nibh.",
  },
  {
    image: "https://placehold.co/250x200?text=Image",
    title: "Monitor Your Campaign",
    description:
      "Curabitur a pretium orci, a venenatis diam phasellus id mi velit. Vestibulum et tincid unt sem, id sagittis nibh.",
  },
];

const Section4 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center gap-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-full flex h-max flex-col items-center justify-center">
            <div className="-space-y-1 text-center">
              <span className="text-xl">Working Process</span>
              <img src="/underline.svg" alt="underline" className="h-2" />
            </div>
            <span className="text-4xl font-bold">How Does It Work?</span>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="group col-span-1 flex h-full flex-col gap-20 sm:even:pt-28 lg:odd:pt-28 lg:even:pt-0"
            >
              <div className="h-64 rounded-xl p-4 shadow-[0_0_30px_5px_rgb(0,0,0,0.08)] sm:group-even:order-2 lg:group-odd:order-2 lg:group-even:order-none">
                <img
                  src={step.image}
                  alt={`Step ${i + 1}`}
                  className="size-full rounded-lg object-cover object-center"
                />
              </div>
              <div
                className={cn(
                  "relative flex flex-col gap-2",
                  i === 0 && "lg:overflow-x-clip",
                )}
              >
                <div className="flex justify-between sm:max-w-[49%]">
                  <span className="text-muted-foreground">Step</span>
                  <span className="size-6 rounded-full bg-primary text-center text-white">
                    {i + 1}
                  </span>
                </div>
                <span className="text-2xl font-bold">{step.title}</span>
                <p className="text-justify">{step.description}</p>
                <div className="absolute -left-44 -top-10 hidden lg:group-even:block">
                  <img src="/line-arrow.svg" alt="line arrow" />
                </div>
                <div className="absolute -bottom-10 -left-44 hidden -scale-y-100 lg:group-odd:block">
                  <img src="/line-arrow.svg" alt="line arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
