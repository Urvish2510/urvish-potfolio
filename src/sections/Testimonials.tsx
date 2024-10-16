import { Fragment } from "react";
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Samantha Lewis",
    position: "Operations Manager @ FinServe",
    text: "Samantha's expertise in streamlining our online processes has been a game-changer. Her ability to simplify complex workflows is impressive. We're seeing much better efficiency now.",
    avatar: memojiAvatar1,
  },
  {
    name: "James O'Neill",
    position: "Chief Marketing Officer @ Creatify",
    text: "Working with Samantha was an absolute delight. She helped us reach our target audience more effectively with a beautifully designed campaign. Our engagement rates have never been higher!",
    avatar: memojiAvatar2,
  },
  {
    name: "Isabella Clark",
    position: "Founder @ ArtistryHub",
    text: "Samantha has an eye for design and a knack for making things user-friendly. Her contributions have transformed our digital presence, making it more accessible and engaging for our community.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ethan Collins",
    position: "VP of Product @ TechWave",
    text: "Samantha is a product management expert. She turned our ideas into a seamless digital experience that our users love. The feedback from our beta testers has been overwhelmingly positive.",
    avatar: memojiAvatar4,
  },
  {
    name: "Natalie Hernandez",
    position: "CTO @ NextGen Solutions",
    text: "Samantha's technical skills are top-notch, and she has a great ability to communicate complex ideas simply. She helped us revamp our website, making it both fast and visually stunning.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <SectionHeader
        title="What Clients Say about Me"
        eyebrow="Happy Clients"
        description="Don't just take my word for it. See what my clients have to say about my
        work."
      />
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 md:size-16 md:max-w-md">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base mt-4 md:mt-6">
                    {testimonial.text}
                  </p>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
