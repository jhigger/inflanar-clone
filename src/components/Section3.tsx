/* eslint-disable @next/next/no-img-element */
import { Heart, Star, Tag } from "lucide-react";
import { cn, formatPrice } from "~/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const services = [
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Life Style",
    price: 120,
    name: "High-Quality Product Photography",
    influencer: "William",
    rating: 0,
    rated: 0,
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Pet Care",
    price: 5500,
    name: "Meet-and-Greet with Lily Turner",
    influencer: "Lily Turner",
    rating: 4,
    rated: 5,
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Games",
    price: 3000,
    name: "Win Prizes from The Brand",
    influencer: "William",
    rating: 4,
    rated: 3,
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Pet Care",
    price: 6200,
    name: "Boost Engagement with Fun Contests",
    influencer: "William",
    rating: 5,
    rated: 2,
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Beauty",
    price: 7500,
    name: "Stunning Visuals for Your Products",
    influencer: "William",
    rating: 3,
    rated: 3,
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Life Style",
    price: 2500,
    name: "Dance Your Way to Brand Awareness",
    influencer: "Mitchell",
    rating: 4,
    rated: 1,
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Photoshot",
    price: 3600,
    name: "Trending Challenges with Your Brand",
    influencer: "Mitchell",
    rating: 2,
    rated: 2,
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    category: "Life Style",
    price: 7500,
    name: "Co-create Engaging Video Content",
    influencer: "Michael",
    rating: 5,
    rated: 2,
  },
];

const Section3 = () => {
  return (
    <section className="bg-gradient-to-tr from-sky-100 via-orange-50 to-purple-100 py-24">
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

          {services.map((service, i) => (
            <div
              key={i}
              className="group h-full overflow-hidden rounded-xl shadow-[0_0_30px_5px_rgb(0,0,0,0.08)] transition-all duration-200 ease-in-out hover:-translate-y-2"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt="profile"
                  className="h-full w-full object-cover object-center transition-all duration-200 ease-in-out group-hover:scale-125"
                />
                <Heart className="absolute right-3 top-3 text-white" />
              </div>
              <div className="grid h-[calc(100%-13rem)] w-full grid-cols-2 items-end justify-center gap-6 bg-white p-5">
                <div className="col-span-1 flex items-center justify-start gap-2">
                  <Tag
                    className="-scale-x-100 fill-blue-500 text-white"
                    size={16}
                  />
                  <span className="text-blue-500">{service.category}</span>
                </div>
                <span className="text-end text-2xl font-bold text-primary">
                  {formatPrice(service.price)}
                </span>
                <span className="col-span-full mb-auto text-2xl font-bold">
                  {service.name}
                </span>
                <hr className="col-span-full text-muted" />
                <div className="col-span-full flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <Avatar className="size-7">
                      <AvatarImage
                        src="https://placehold.co/200x200?text=Image"
                        alt="avatar"
                      />
                    </Avatar>
                    <span className="text-muted-foreground">
                      {service.influencer}
                    </span>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "stroke-1 text-orange-400",
                            i < service.rating && "fill-orange-400",
                          )}
                          size={18}
                        />
                      ))}
                    <span className="ml-2 text-sm tracking-wide text-muted-foreground">
                      ({service.rated})
                    </span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="col-span-full bg-rose-200 hover:bg-primary"
                >
                  Book Now
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

export default Section3;
