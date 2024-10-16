"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import Githubicon from "@/assets/icons/github.svg";
import JavaIcon from "@/assets/icons/java.svg";
import NodeJsIcon from "@/assets/icons/nodejs.svg";
import mapImage from "@/assets/images/map.png";
import smileImoji from "@/assets/images/memoji-smile.png";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Nodejs",
    iconType: NodeJsIcon,
  },
  {
    title: "React Native",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: Githubicon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Travel",
    iconType: "🌍",
    top: "55%",
    left: "33%",
  },
  {
    title: "Photography",
    iconType: "📸",
    top: "5%",
    left: "50%",
  },
  {
    title: "Cooking",
    iconType: "🍳",
    top: "35%",
    left: "10%",
  },
  {
    title: "Gaming",
    iconType: "🎮",
    top: "22%",
    left: "28%",
  },
  {
    title: "Reading",
    iconType: "📚",
    top: "5%",
    left: "5%",
  },
  {
    title: "Music",
    iconType: "🎵",
    top: "65%",
    left: "5%",
  },
  {
    title: "Fitness",
    iconType: "🏋️",
    top: "65%",
    left: "60%",
  },
  {
    title: "Garba",
    iconType: "🕺",
    top: "35%",
    left: "65%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <Image
                className="w-40 mx-auto mt-2 md:mt-0"
                src={bookImage}
                alt="Book Cover"
              />
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description=" Explore the technologies and tools I use to create digital
                experiences."
              />
              <ToolBoxItems
                items={toolBoxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond of the digital world."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 px-6 absolute"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{cursor: "grab"}}
                    whileDrag={{ cursor: "grabbing" }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.iconType}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <div>
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-[320px] w-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={smileImoji}
                    alt="Smile Imoji"
                    className="size-20"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
