import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center w-screen bg-black">
      <div className="flex flex-col justify-end max-w-[2560px] w-full flex flex-col px-7">
        <div className="text-white text-4xl lg:text-6xl font-bold pt-20 pb-7">[ ABOUT ME ]</div>
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-7 text-white">
          <div className="bg-neutral-900 aspect-square col-span-4 rounded-2xl flex items-center justify-center">
            <img src="./headshot.png" alt="Example" className="w-11/12 h-11/12 rounded-full object-cover" />
          </div>
          <div className="bg-neutral-900 aspect-square lg:aspect-auto col-span-4 lg:col-span-8 rounded-2xl flex items-center justify-center">
            <div className="text-2xl md:text-3xl lg:text-4xl px-16">I'm a computer science student at UCSD and an entrepreneurial full-stack developer with a passion for learning and innovating. I like to build things for the web.</div>
          </div>
          <div className="bg-neutral-900 aspect-square lg:aspect-auto col-span-4 lg:col-span-8 rounded-2xl flex flex-col items-center justify-center">
            <div className="text-neutral-500 text-xl lg:text-2xl">Have an idea?</div>
            <div className="text-white font-bold text-3xl lg:text-4xl">Let's work together</div>
            <a href="mailto:jordanangin@gmail.com" className="bg-white text-black py-3 px-16 font-bold text-lg lg:text-2xl rounded-lg mt-4">Contact me</a>
          </div>
          <div className="bg-neutral-900 aspect-square col-span-4 rounded-2xl flex flex-col items-center justify-center space-y-10"  onClick={scrollToTop}>
            <FaArrowUpLong className="h-36 w-36"/>
            <div className="text-neutral-500 text-2xl">Back to top</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
