/* eslint-disable @next/next/no-img-element */
import { CalendarClock, UserRound } from "lucide-react";

const items = [
  {
    image: "https://placehold.co/200x200?text=Image",
    name: "Matthew",
    date: "26 October 2023",
    title: "Monetize Content: Licensing and Repurp..",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    name: "Olivia Clark",
    date: "26 October 2023",
    title: "We Negotiate, You Collaborate: Influen..",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    name: "John Smith",
    date: "26 October 2023r",
    title: "Boost Engagement with Live Q&A Ses..",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    name: "Lily Turner",
    date: "26 October 2023",
    title: "Influencer-Approved Product Reviews an..",
  },
];

const Section8 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center gap-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-full flex h-max flex-col items-center justify-center">
            <div className="-space-y-1 text-center">
              <span className="text-xl">Latest News</span>
              <img src="/underline.svg" alt="underline" className="h-2" />
            </div>
            <span className="text-4xl font-bold">Latest Blog & Articles</span>
          </div>

          {items.map((item) => (
            <div
              key={item.name}
              className="group col-span-1 flex h-full flex-col gap-4 rounded-xl bg-white p-3 shadow-[0_0_30px_5px_rgb(0,0,0,0.08)] transition-all duration-200 ease-in-out hover:-translate-y-2"
            >
              <div className="flex aspect-[4/3] gap-4 overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt="thumbnail"
                  className="size-full object-cover object-center transition-all duration-200 ease-in-out group-hover:scale-125"
                />
              </div>
              <div className="grid w-full grid-cols-2 items-center justify-center gap-1 p-2">
                <div className="col-span-1 flex items-center justify-start gap-2">
                  <UserRound size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    by{" "}
                    <a href="#" className="underline">
                      {item.name}
                    </a>
                  </span>
                </div>
                <div className="col-span-1 flex items-center justify-end gap-2">
                  <CalendarClock size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <hr className="col-span-full my-4 text-muted" />
                <span className="col-span-full line-clamp-2 text-2xl font-bold leading-normal group-hover:text-primary">
                  <a href="#" className="hover:underline">
                    {item.title}
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;
