import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Full Stack Developer.","MERN Stack Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kanaram Saini</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Hello, I am Kanaram Saini, a full-stack developer from Jaipur. I have a passion for coding and creating websites and apps. I have learned various programming languages and frameworks, such as HTML, CSS, Bootstrap, JavaScript, React, NodeJS, MySQL, and MongoDB. I come from a small village where even the thought of owning a computer was a dream. But I followed my dream and transformed my life through sheer determination and hard work. I started as an office boy in an IT company, but I did not let that stop me from learning and growing. I spent hours after work, watching tutorials and practicing codes. I applied for jobs as a full-stack developer, but I faced many rejections. I did not give up, and I continued to improve my skills and portfolio. Today, I am proud of where I am, and I hope to inspire others to follow their dreams, no matter how big or small. This is my story, a story of self-belief and perseverance.
          
        </p>
      </div>
     {/* Media */}
     {/* <Media /> */}
    </div>
  );
}

export default LeftBanner