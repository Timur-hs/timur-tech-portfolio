import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import {
  SiVuedotjs,
  SiNextdotjs,
  SiNuxtdotjs,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Данные
export const aboutData = [
  {
    title: "навыки",
    icon: FaCode,
    info: [
      {
        title: "Разработка веб-приложений",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiVuedotjs,
          SiNextdotjs,
          SiNuxtdotjs,
        ],
      },
    ],
  },
  {
    title: "опыт",
    icon: FaBriefcase,
    info: [
      {
        title: "Monro Art",
        stage: "2022 - 2023",
      },
      {
        title: "Easycode",
        stage: "2024 - 2025",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
      <div className="h-full bg-primary/30 py-16 md:py-32 text-center xl:text-left">
        <Circles />

        {/* Аватар */}
        {/*<motion.div*/}
        {/*    variants={fadeIn("right", 0.2)}*/}
        {/*    initial="hidden"*/}
        {/*    animate="show"*/}
        {/*    exit="hidden"*/}
        {/*    className="hidden xl:flex absolute bottom-0 -left-[480px]"*/}
        {/*>*/}
        {/*  <Avatar />*/}
        {/*</motion.div>*/}

        <div className="container mx-auto h-full flex flex-col-reverse xl:flex-row gap-x-6">
          {/* Текст */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-3xl md:text-4xl lg:text-5xl"
            >
              Код <span className="text-accent">оживает</span>.
            </motion.h2>
            <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-4 xl:px-0 text-sm md:text-base"
            >
              Я фронтенд разработчик с трехлетним опытом работы. Создаю интерактивные и пользовательские веб-приложения, используя такие технологии, как React, Vue.js, Next.js и Nuxt.js. Внимание к деталям и стремление к совершенству позволяют мне создавать проекты, которые не только функциональны, но и визуально привлекательны.
            </motion.p>

            {/* Счетчики */}
            <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-8"
            >
              {/* Опыт */}
              <div className="flex flex-col items-center md:items-start">
                <div className="text-2xl md:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  года опыта.
                </div>
              </div>

              {/* Клиенты */}
              <div className="flex flex-col items-center md:items-start">
                <div className="text-2xl md:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  довольных клиентов.
                </div>
              </div>

              {/* Проекты */}
              <div className="flex flex-col items-center md:items-start">
                <div className="text-2xl md:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  завершенных проектов.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Информация */}
          <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemI) => (
                  <div
                      key={itemI}
                      className={`flex items-center gap-2 ${
                          index === itemI &&
                          "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                      } cursor-pointer capitalize text-sm md:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemI)}
                  >
                    <item.icon className="text-xl" />
                    {item.title}
                  </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemI) => (
                  <div
                      key={itemI}
                      className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                  >
                    {/* Заголовок */}
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">•</div>
                    <div className="font-light">{item.stage}</div>

                    <div className="flex gap-x-4">
                      {/* Иконки */}
                      {item.icons?.map((Icon, iconI) => (
                          <div key={iconI} className="text-2xl text-white">
                            <Icon />
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default About;