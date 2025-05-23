


import StarIcon from "@/assets/icons/star.svg";
import SmeIcon from "@/assets/icons/sme.svg?url";
import StartUpIcon from "@/assets/icons/startups.svg?url";
import InovatorIcon from "@/assets/icons/inovation.svg?url";
import CorporateIcon from "@/assets/icons/corporations.svg?url";
import backGroundImage from "@/assets/images/whoThisForBg.png";
import { motion } from "framer-motion";
import AnimatedText from "@/component/ui/animatedText";
import { useInView } from "react-intersection-observer";

const audiences = [
  {
    title: "Innovators",
    icon: InovatorIcon,
    description:
      "Visionaries bringing new ideas to life — builders, creatives, disruptors, and problem solvers.",
  },
  {
    title: "Startups",
    icon: StartUpIcon,
    description:
      "Early-stage teams seeking clarity, traction, and systems to scale what they’re creating.",
  },
  {
    title: "SMEs",
    icon: SmeIcon,
    description:
      "Established businesses ready to evolve and systemize, grow, and sharpen their digital edge.",
  },
  {
    title: "Corporations",
    icon: CorporateIcon,
    description:
      "Larger organizations looking for agile, full-stack partners to drive innovation and deliver results.",
  },
];
const WhoThisFor = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="py-[31px] px-[20px] mb-[150px] md:mb-[205px]">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex  flex-col justify-start md:justify-center  items-start md:items-center"
      >
        <motion.p
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase px-[16px] py-[10px] w-fit  font-semibold text-[14px] md:text-[16px] rounded-[40px] flex items-center gap-x-4 bg-[#D6BEFF]/10"
        >
          <StarIcon /> WHO IS THIS FOR?
        </motion.p>
        <AnimatedText className="text-[28px] md:text-[40px] py-[10px] md:text-center font-instrument leading-[120%] text-start font-medium">
          <>
            We work with forward-thinking teams across every{" "}
            <br className="md:block hidden" />
            industry and growth stage — to build, launch, and scale{" "}
            <br className="md:block hidden" />
            <span className="text-[#BB7AFF]">something that matters.</span>
          </>
        </AnimatedText>
        {/* desktop view */}
        <div
          style={{ backgroundImage: `url(${backGroundImage})` }}
          className="md:h-[590px]  grid-cols-1 md:grid hidden md:grid-cols-2  md:w-[1010px]  bg-no-repeat bg-cover bg-center "
        >
          {audiences.map((item, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" }}
              className="px-[40px] flex flex-col justify-center items-center py-[72px]"
              key={i}
            >
              <div className="w-[52px]">
                <img style={{ width: "100%" }} src={item.icon} alt="" />
              </div>
              <h3 className="pt-[16px] text-[16px] pb-[8px] font-instrument font-semibold leading-[27px] text-center">
                {item.title}
              </h3>
              <p className=" text-[16px] leading-[24px] font-instrument text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* mobile view */}
        <div className=" relative  md:hidden block  ">
          {audiences.slice(0, 2).map((item, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" }}
              className="px-[16px]  md:px-[40px] flex flex-col justify-center items-center py-[16px]"
              key={i}
            >
              {/* <StartUpsIcon/> */}
              <div className="w-[52px]">
                <img style={{ width: "100%" }} src={item.icon} alt="" />
              </div>
              <h3 className="pt-[16px] text-[16px] pb-[8px] font-instrument font-semibold leading-[27px] text-center">
                {item.title}
              </h3>
              <p className="text-[#E2E1E5] text-[14px] md:text-[16px] leading-[24px] font-instrument text-center">
                {item.description}
              </p>
            </motion.div>
          ))}

          <img src={backGroundImage} className="scale-150  z-10" alt="" />
          {audiences.slice(2, 4).map((item, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: i * 0.5, ease: "easeOut" }}
              className="px-[16px] md:px-[40px] flex flex-col justify-center items-center py-[16px]"
              key={i}
            >
              <div className="w-[52px] z-40 rel">
                <img style={{ width: "100%" }} src={item.icon} alt="" />
              </div>
              <h3 className="pt-[16px] text-[16px] pb-[8px] font-instrument font-semibold leading-[27px] text-center">
                {item.title}
              </h3>
              <p className="text-[#E2E1E5] text-[14px] md:text-[16px] leading-[24px] font-instrument text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhoThisFor;