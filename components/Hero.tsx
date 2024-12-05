"use client"
import { FaArrowDown } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

const Hero = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'UI/UX Designer', 'NextJs Developer', 'React Developer', 'NodeJs Developer',],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1000,
            startDelay: 500,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="pb-20 pt-32">
            {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Developer&apos;s Portfolio
                    </p>

                    {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[30px] md:text-4xl lg:text-5xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-xl lg:text-2xl">
                        Hi! I&apos;m <span className="font-semibold text-gray-300">Maazin Abdullah</span>, a Professional <span className="text-purple" ref={el} />
                    </p>

                    <a target="_blank" href="https://drive.google.com/file/d/1MHNSbVStB2sXqdngguffW_nAGgj2-S0X/view?usp=drivesdk">
                        <MagicButton
                            title="Resume"
                            icon={<FaArrowDown />}
                            position="right" 
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;