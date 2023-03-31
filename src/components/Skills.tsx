import Wordcloud from "./Wordcloud";
import { mySkills } from "../shared/constants";

const Skills = () => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="text-center text-3xl lg:text-4xl"
      >
        Skills and Technologies
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="description text-lg text-center my-[30px]"
      >
        The primary languages and technologies I know and work with
      </p>
      <div
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="9"
        className="grid justify-center grid-cols-6 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px] gap-x-[20px]"
      >
        {mySkills.map((skill, index) =>
          index % 2 === 0 ? (
            <img
              key={skill.id}
              className="w-[60px] h-[60px] transition duration-300"
              src={skill.image}
              alt=""
            />
          ) : null
        )}
      </div>
      <div
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-9"
        className="grid justify-center grid-cols-6 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px] gap-x-[20px] mt-5"
      >
        {mySkills.map((skill, index) =>
          index % 2 === 1 ? (
            <img
              key={skill.id}
              className="w-[60px] h-[60px] transition duration-300"
              src={skill.image}
              alt=""
            />
          ) : null
        )}
      </div>
      <Wordcloud />
    </div>
  );
};

export default Skills;
