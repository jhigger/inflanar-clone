/* eslint-disable @next/next/no-img-element */
import { useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

const Navbar = () => {
  const [y, setY] = useState(0);
  const { scrollY } = useScroll();

  scrollY.on("change", (y) => {
    setY(y);
  });

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50",
        y > 20 && "bg-white bg-opacity-50 drop-shadow-xl backdrop-blur-xl",
      )}
    >
      <nav className="container flex w-full items-center justify-between gap-12 py-4">
        <img src="https://placehold.co/200x50?text=Logo" alt="logo" />
        <div className="flex gap-8">
          <span>Link1</span>
          <span>Link2</span>
          <span>Link3</span>
          <span>Link4</span>
          <span>Link5</span>
          <span>Link6</span>
        </div>
        <div className="space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
