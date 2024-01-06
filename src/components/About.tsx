const About = () => {
  return (
    <div
      id="about"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <div className="relative max-w-[250px]">
        <div
          data-scroll
          data-scroll-speed="2"
          className="absolute -inset-1 bg-pink-600 rounded-full blur"
        ></div>
        <img
          data-scroll
          data-scroll-speed="2"
          className="md:min-w-[250px]"
          src="/z_round.png"
          alt=""
        />
      </div>
      <div>
        <h1
          data-scroll
          data-scroll-speed="0.5"
          className="title mb-3 text-[40px]"
        >
          About Me
        </h1>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Hi!&nbsp; I&apos;m Zachariah Stroup, also known as StroupZ, and
          I&apos;m a fullstack developer with a passion for Web3.&nbsp; Ever
          since I discovered blockchain and DLT tech, I&apos;ve been obsessed...
          so much so that I was driven to teach myself how to become a Web3
          developer.&nbsp; I&apos;m convinced that the decentralization,
          transparency, and security offered by blockchains and smart contracts
          is the future, and I want to be a part of making that future
          happen.&nbsp; I also love front-end design and so my other focus has
          been on creating an aesthetically pleasing, yet dynamic experience for
          those viewing my work.&nbsp; Enjoy!
        </p>
      </div>
    </div>
  );
};

export default About;
