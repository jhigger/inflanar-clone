/* eslint-disable @next/next/no-img-element */
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-48 h-96 bg-sky-950 py-24">
      <div className="container">
        <div className="-mt-64 grid w-full grid-cols-1 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-300 via-orange-100 to-violet-300 px-16 py-4 shadow-xl lg:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-16">
            <span className="text-4xl font-bold">
              Let influencers do the heavy lifting for your marketing campaign
            </span>
            <Button size="lg" className="w-max">
              Signup Now!
            </Button>
          </div>

          <div className="col-span-1 flex h-72 w-full max-w-xl overflow-hidden rounded-xl">
            <img
              src="https://placehold.co/200x200?text=Image"
              alt="illustration"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
