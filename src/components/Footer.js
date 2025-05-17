import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Footer() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const getFormattedTime = (date) => {
        const day = date.getDate();
        const months = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];
        const month = months[date.getMonth()];
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds().toString().padStart(2, "0");
        const period = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        const timeZone = date
            .toLocaleString("en-US", { timeZoneName: "short" })
            .split(" ")
            .pop();

        return `${day} ${month} ${formattedHour}:${minute}:${second} ${period} ${timeZone}`;
    };

    const formattedTime = getFormattedTime(currentTime);

    return (
        <div className="flex flex-col items-center w-screen bg-black">
            <div className="flex flex-col justify-end max-w-[1200px] w-full flex flex-col px-7 py-4">
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 text-white">
                    <div className="order-1 bg-neutral-900 col-span-4 rounded-2xl h-20">
                        <div className="flex flex-col h-20 text-white font-bold text-lg justify-center items-center opacity-30">
                            {formattedTime}
                        </div>
                    </div>
                    <div className="order-last lg:order-2 bg-neutral-900 col-span-4 rounded-2xl h-20">
                        <div className="flex items-center justify-evenly h-20">
                            <a
                                href="https://www.linkedin.com/in/jordanperanginangin/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="h-6 w-6 opacity-30 hover:opacity-100 transition ease-in-out duration-150" />
                            </a>
                            <a
                                href="https://github.com/kapforty"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="h-6 w-6 opacity-30 hover:opacity-100 transition ease-in-out duration-150" />
                            </a>
                            <a
                                href="https://twitter.com/kapforty"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaXTwitter className="h-6 w-6 opacity-30 hover:opacity-100 transition ease-in-out duration-150" />
                            </a>
                        </div>
                    </div>
                    <div className="order-3 bg-neutral-900 col-span-4 rounded-2xl h-20">
                        <div className="flex flex-col h-20 text-white font-bold text-lg justify-center items-center opacity-30">
                            JORDANANGIN@GMAIL.COM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
