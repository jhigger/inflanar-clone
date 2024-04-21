/* eslint-disable @next/next/no-img-element */
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

const influencers = [
  {
    bg: "bg-rose-100",
    image: "https://placehold.co/200x200?text=Image",
    name: "William",
    role: "Youtuber",
    followers: "19K",
    following: "12",
  },
  {
    bg: "bg-blue-100",
    image: "https://placehold.co/200x200?text=Image",
    name: "Sophia",
    role: "App Developer",
    followers: "36K",
    following: "12",
  },
  {
    bg: "bg-green-100",
    image: "https://placehold.co/200x200?text=Image",
    name: "Sarah",
    role: "Fashion Designer",
    followers: "37K",
    following: "0",
  },
  {
    bg: "bg-purple-100",
    image: "https://placehold.co/200x200?text=Image",
    name: "Olivia Clark",
    role: "Food Vloger",
    followers: "27K",
    following: "12",
  },
];

const Section2 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center gap-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-full flex h-max flex-col items-center justify-center">
            <div className="-space-y-1 text-center">
              <span className="text-xl">Our Services</span>
              <img src="/underline.svg" alt="underline" className="h-2" />
            </div>
            <span className="text-4xl font-bold">
              Influencer Latest Services
            </span>
          </div>

          {influencers.map((influencer) => (
            <div
              key={influencer.name}
              className="group col-span-1 flex h-full flex-col gap-4 rounded-xl bg-white p-3 shadow-[0_0_30px_5px_rgb(0,0,0,0.08)] transition-all duration-200 ease-in-out hover:-translate-y-2"
            >
              <div
                className={cn(
                  "flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-lg",
                  influencer.bg,
                )}
              >
                <img
                  src={influencer.image}
                  alt="profile"
                  className="size-40 rounded-xl shadow-[0_0_40px_5px_rgb(0,0,0,0.15)]"
                />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-xl font-bold group-hover:text-primary">
                    {influencer.name}
                  </span>
                  <span className="text-muted-foreground">
                    {influencer.role}
                  </span>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 items-center justify-center divide-x p-4">
                <div className="col-span-1 flex flex-col items-start justify-center">
                  <span className="text-lg font-bold">
                    {influencer.followers}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Followers
                  </span>
                </div>
                <div className="col-span-1 flex flex-col items-end justify-center">
                  <span className="text-lg font-bold">
                    {influencer.following}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Following
                  </span>
                </div>
                <hr className="col-span-full my-4 text-muted" />
                <Button variant="secondary" size="lg" className="col-span-full">
                  View Profile
                </Button>
              </div>
            </div>
          ))}

          <Button size="lg" className="col-span-full mx-auto">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
