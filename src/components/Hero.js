function Hero() {
    return (
        <div className="flex flex-col items-center w-screen bg-black static top-0">
            <div className="flex flex-col justify-end max-w-[1200px] w-full h-screen flex flex-col px-7 pt-32 -mt-4 sm:mt-0">
                <div className="grow">
                    <video
                        src="/gradients/haze.mp4"
                        className="h-full w-full object-cover -my-7 rounded-3xl"
                        autoPlay
                        loop
                        muted
                    />
                </div>
                <div className="flex flex-col sm:flex-row pb-14">
                    <div className="text-white flex flex-col w-full sm:w-11/12">
                        <div className=" text-3xl sm:text-5xl font-bold">
                            JORDAN PERANGINANGIN
                        </div>
                        <div className="text-xl sm:text-2xl font-bold pt-2">
                            yes, i know my last name is long...
                        </div>
                    </div>

                    <div className="grow"></div>
                    <div className="flex flex-col justify-end text-white text-md sm:text-3xl font-bold pt-4 w-1/3 sm:text-end">
                        [ SCROLL ]
                    </div>
                </div>

                <hr></hr>
            </div>
        </div>
    );
}

export default Hero;
