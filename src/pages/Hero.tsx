import React from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/images/profilepic.png";
import { div } from "framer-motion/client";

const Hero = () => {
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">
      <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px] border-[1px] border-[#8CD6DE]/30"></div>

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
<motion.div
initial={{opacity: 0, scale: 0.5}}
animate={{opacity: 1, scale: 1}}
transition={{duration: 0.8}}
className="relative mb-8 mt-24"
>
    <img
    src={profilepic}
    alt="John Doe"
    className="w-[250px] relative z-10"
    />
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
