function Hero() {
  return (
    <div className="flex flex-col items-center w-screen bg-black static top-0">
      <div className="flex flex-col justify-end max-w-[2560px] w-full h-screen flex flex-col px-7 pt-32 -mt-20 sm:mt-0">

        <div className="aspect-square bg-[url('/public/doodle.png')] bg-contain bg-bottom rounded-full border-neutral-800 border-8"></div>

        <div className="flex flex-col sm:flex-row py-14">
          <div className="text-white text-3xl sm:text-5xl font-bold w-full sm:w-11/12">JUST A KID ON A MISSION TO BECOME A SOFTWARE ENGINEER</div>
          <div className="grow"></div>
          <div className="flex flex-col justify-end text-white text-md sm:text-3xl font-bold pt-4 w-1/3 sm:text-end">[ SCROLL ]</div>
        </div>

        <hr></hr>
      </div>
    </div>
  );
}

export default Hero;
