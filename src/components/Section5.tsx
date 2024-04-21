/* eslint-disable @next/next/no-img-element */
import { Check, PlayIcon } from "lucide-react";
import { Button } from "./ui/button";

const Section5 = () => {
  return (
    <div className="bg-gradient-to-tr from-sky-200 via-orange-50 to-violet-200 py-24">
      <div className="container relative grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
        <div className="col-span-1 flex flex-col gap-8">
          <span className="text-4xl font-bold">
            Manage all your creator relationships in one place.
          </span>

          <p className="text-justify">
            Suspendisse non leo lobortis, fermentum magna vitae, viverra nisi.
            Quisque tristique preti odio eget ullamcorper. Sed quis mi pulvinar
            Integer vitae lorem tortor. Integer tempus as nulla massa, eu
            blandit risus euismod non. Aenean vitae nunc ets orci suscipit
            hendrerit. Aenean et facilisis dolor. Aliquam vulputate facilisis
            neque.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-white">
                <Check size={12} className="flex-shrink-0 stroke-[5]" />
              </span>
              <span className="italic">
                Page Load (time, size, number of requests).
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-white">
                <Check size={12} className="flex-shrink-0 stroke-[5]" />
              </span>
              <span className="italic">Adance Data analysis operation.</span>
            </div>
          </div>

          <Button size="lg" className="mt-4 w-max">
            Discover More
          </Button>
        </div>

        <div className="col-span-1 flex items-center justify-end">
          <div className="relative size-[500px] overflow-hidden rounded-xl">
            <img
              src="https://placehold.co/200x200?text=Image"
              alt="thumbnail"
              className="size-full object-cover object-center"
            />
            <Button className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto size-max rounded-full bg-white p-5 text-primary hover:bg-primary hover:text-white">
              <PlayIcon fill="currentColor" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto size-max animate-ping rounded-full border border-white p-8 delay-700 ease-linear"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto size-max animate-ping rounded-full border border-white p-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
