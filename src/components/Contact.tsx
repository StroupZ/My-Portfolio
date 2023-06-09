const Contact = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">Contact Me</h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[500px] flex gap-10 flex-col">
          <form
            action={process.env.NEXT_PUBLIC_EMAIL}
            method="POST"
            className="flex flex-col gap-2"
          >
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Satoshi Nakamoto"
              required
              minLength={3}
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="snakamoto@gmail.com"
              required
            />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Greetings!"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Let's chat soon..."
              required
            />
            <button className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]">
              Send
            </button>
          </form>
          <div className="flex justify-center space-x-4">
            <a
              href={process.env.NEXT_PUBLIC_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img
                className="w-[60px] h-[60px] rounded-full hover:scale-110"
                src="/github.png"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/StroupZ_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img
                className="w-[60px] h-[60px] rounded-full hover:scale-110"
                src="/twitter-logo.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
