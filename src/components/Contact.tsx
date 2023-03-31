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
              placeholder="John Doe"
              required
              minLength={3}
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              required
            />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Let's have a chat!"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="I would like to talk with you soon..."
              required
            />
            <button className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]">
              Send
            </button>
          </form>
          <div className="flex flex-col items-center">
            <a
              href={process.env.NEXT_PUBLIC_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img
                className="w-[60px] h-[60px] rounded-full"
                src="/github.png"
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
