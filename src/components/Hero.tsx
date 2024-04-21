/* eslint-disable @next/next/no-img-element */
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const popularSearches = [
  "Bibliophile",
  "Cooking",
  "Education",
  "Streaming",
  "Technology",
];

const Hero = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 2465, { duration: 1 });

    return animation.stop;
  }, [count]);

  return (
    <section className="bg-gradient-to-b from-sky-50 via-rose-50 to-white">
      <div className="container grid w-full grid-cols-1 place-items-stretch justify-items-stretch gap-y-8 py-24 lg:grid-cols-2">
        <div className="z-10 col-span-1 flex flex-col justify-center gap-8">
          <div>
            <span className="text-lg uppercase">
              Go to your influencer platform
            </span>
            <h1 className="text-6xl font-bold leading-normal">
              The Right <span className="text-primary">Influencer</span> For
              Your Business
            </h1>
          </div>

          <div className="flex w-fit flex-col gap-4">
            <div className="flex w-full items-center justify-center gap-4 rounded-xl bg-white px-4 py-2 pl-8 pr-2">
              <Search className="flex-shrink-0 stroke-1" />
              <Input
                placeholder="Search by name, profession, or country"
                className="border-0"
              />
              <Button size="lg" className="text-lg">
                Search
              </Button>
            </div>

            <div className="flex w-fit flex-col gap-4 lg:flex-row">
              <span className="whitespace-nowrap">Popular Search</span>
              <div className="flex flex-wrap items-center gap-2">
                {popularSearches.map((search) => (
                  <Button
                    key={search}
                    variant="outline"
                    size="sm"
                    className="h-7 text-sm font-normal"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-[-16px]">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Avatar
                    key={i}
                    className="size-14 rounded-full border-4 border-white transition-all duration-200 ease-in-out hover:scale-90 md:size-20"
                    asChild
                  >
                    <a href="#">
                      <AvatarImage
                        src="https://placehold.co/200x200?text=Image"
                        alt="avatar"
                      />
                    </a>
                  </Avatar>
                ))}
            </div>
            <div>
              <div className="flex items-center text-2xl">
                <motion.span className="font-bold">{rounded}</motion.span>
                <span className="h-9 font-extrabold">+</span>
              </div>
              <div className="text-muted-foreground">Influencers</div>
            </div>
          </div>
        </div>

        <img
          src="https://placehold.co/700x800?text=Image"
          alt="hero image"
          className="col-span-1 h-full w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
