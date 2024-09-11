import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#000000] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "Greetings, I'm Vikas Nath Jha also known as Saizuo"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I'm just your average Joe with a dabbling of coding knowledge and absolutely zero experience in stock trading. When I'm not scrolling through cat videos on YouTube, I like to pretend to work on projects, hang out with people who barely tolerate me, read books (mostly for the pictures), go on adventures (to the fridge and back), and daydream about new ideas that I will likely never act on.Despite my general cluelessness."
              }
            />
            <AnimatedBody
              text={
                "'ve always been curious about the world. As a kid, I loved taking things apart and pretending to know how to put them back together. While my endeavors in coding and the stock market have been underwhelming at best, I'm confident that my boundless enthusiasm and lack of expertise will carry me to new heights (or maybe just to the nearest bar)."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "So if you're looking for someone who is mediocre at everything and has a knack for making bad jokes, I'm your guy"
              }
            />
            <AnimatedBody
              text={
                "Right now, I’m working on some exciting projects that I can’t wait to share with you."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Currently Working at"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Magnimont and providing consultancy services to various clients."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Techstack and Technologies"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "The main list is available on Github now. Feel free to check it out."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Funny Facts"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Did you know that the inventor of the frisbee was turned into a frisbee after he died? His ashes were molded into frisbees and given away as a promotional item by the company he founded!"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
