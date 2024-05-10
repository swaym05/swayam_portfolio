import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full py-16 sm:py-0 sm:h-screen bg-bg-custom text-gray-300 "
    >
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[900px] px-8 w-full  grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#ff5e62]  ">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-xl sm:text-4xl font-bold pl-8 ">
            <p>Hi. I'm Swayam, nice to meet you, PLease take a look around.</p>
          </div>
          <div className="pl-8 pr-8 md:pl-0">
            I'm an engineering graduate with a passion for technology and a drive to
            learn and grow in the field. While I may not have professional
            experience yet, my journey in engineering has been fueled by
            curiosity and a commitment to mastering new skills. After completing
            my degree, I delved into the world of programming, particularly
            Java, through self-directed learning. I've completed courses on
            platforms like YouTube and other online sources, honing my skills.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
