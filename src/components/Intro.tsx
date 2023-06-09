import { Fragment } from "react";
import { BiChevronsDown } from "react-icons/bi";
import { m } from "framer-motion";
import Constellations from "./Constellations";
import { myCharacters } from "../shared/constants";

const Intro = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <div className="absolute w-screen">
        <Constellations />
      </div>
      <svg
        className="h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]"
        viewBox="0 0 590 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {myCharacters.map((character, index) => (
          <Fragment key={character}>
            <m.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ ease: "linear", delay: index / 10, duration: 1 }}
              d={character}
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
            ></m.path>
          </Fragment>
        ))}
      </svg>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-3xl text-center z-[1] overflow-hidden mt-5"
      >
        {`Fullstack Web3 Developer`}
      </m.p>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#about"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
