import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full pt-10 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <Link href="mailto:maazin.a.professional@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MagicButton
                        title="Let's get in Touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </Link>

            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Maazin Abdullah
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <Link href={info.url} key={info.id} target="_blank" rel="noopener noreferrer">
                            <div
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="social icon" width={20} height={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;