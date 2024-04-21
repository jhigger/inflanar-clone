/* eslint-disable @next/next/no-img-element */
import { cn } from "~/lib/utils";

const features = [
  {
    bg: "bg-rose-500",
    icon: "https://placehold.co/50x50?text=Image",
    title: "No Upfront Cost",
    description:
      "Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  },
  {
    bg: "bg-blue-500",
    icon: "https://placehold.co/50x50?text=Image",
    title: "Verified Creators",
    description:
      "Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  },
  {
    bg: "bg-purple-500",
    icon: "https://placehold.co/50x50?text=Image",
    title: "Live Chat",
    description:
      "Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  },
  {
    bg: "bg-yellow-500",
    icon: "https://placehold.co/50x50?text=Image",
    title: "Safe Camping",
    description:
      "Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  },
];

const Section1 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 rounded-2xl bg-gradient-to-tr from-sky-100 via-orange-50 to-purple-100 p-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-full mb-16 flex h-max flex-col items-center justify-center">
            <div className="-space-y-1 text-center">
              <span className="text-xl">Best Feature</span>
              <img src="/underline.svg" alt="underline" className="h-2" />
            </div>
            <span className="text-4xl font-bold">Our Latest Features</span>
          </div>

          {features.map((feature) => (
            <div key={feature.title} className="group space-y-8">
              <div
                className={cn(
                  "w-max rounded-xl p-4 transition-all duration-200 ease-in-out group-hover:scale-110",
                  feature.bg,
                )}
              >
                <img src={feature.icon} alt="icon" className="size-12" />
              </div>
              <div className="space-y-4">
                <span className="text-2xl font-bold">{feature.title}</span>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
