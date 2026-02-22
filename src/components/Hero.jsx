import React from "react";
import { TypeAnimation } from "react-type-animation";
import { IoIosContact } from "react-icons/io";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const MotionDiv = motion.div;
  const MotionA = motion.a;
  const { t, i18n } = useTranslation();

  return (
    <>
      <MotionDiv animate={{x:[150,-240]}} transition={{duration:3,repeat:Infinity,repeatType:'reverse'}}  className="absolute sm:w-150 w-[50%] h-150 bg-purple-700/30 blur-[150px] 
      rounded-full sm:top-1/5 top-1/4 left-1/3 animate-"></MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="home"
        className="flex sm:border overflow-hidden border-white sm:m-5 sm:mt-20 flex-col min-h-screen mt-16 
         justify-center items-center"
      >
        <div className="flex md:flex-row flex-col justify-center gap-5 items-center z-10">
          <img
            src="/adam1.jpg"
            onDragStart={(e) => e.preventDefault()}
            className="aspect-square select-none h-[40vh] rounded-full"
          />
          <div className="flex flex-col">
            <TypeAnimation
              key={i18n.language}
              sequence={[
                t("hero.sequence.welcome"),
                2000,
                t("hero.sequence.name"),
                2000,
                t("hero.sequence.role"),
                2000,
              ]}
              repeat={Infinity}
              className="text-transparent hover:text-white hover:[-webkit-text-stroke:0] font-extrabold [-webkit-text-stroke:2px_white] italic uppercase
           text-center pr-4 text-5xl select-none"
              cursor={true}
            />{" "}
          </div>
        </div>
        <a
          className="mt-10 px-6 py-3 border scale-95 hover:scale-100 cursor-pointer border-white/20 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300 flex items-center gap-2"
        >
          <IoIosContact />
          {t("hero.contacts")}
        </a>
      </MotionDiv>
    </>
  );
}
