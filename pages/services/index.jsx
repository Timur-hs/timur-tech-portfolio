import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Пример данных для услуг
export const serviceData = [
  {
    title: "Разработка веб-приложений",
    description: "Создание интерактивных и пользовательских веб-приложений с использованием современных технологий.",
  },
  {
    title: "Фронтенд разработка",
    description: "Разработка пользовательских интерфейсов с акцентом на производительность и удобство использования.",
  },
  {
    title: "Интеграция API",
    description: "Интеграция с различными API для создания функциональных и масштабируемых решений.",
  },
  {
    title: "Оптимизация производительности",
    description: "Оптимизация веб-приложений для улучшения скорости загрузки и общей производительности.",
  },
];

const Services = () => {
  return (
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2 xl:mt-8"
              >
                Мои услуги <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                Я предлагаю широкий спектр услуг по разработке веб-приложений, включая фронтенд разработку, интеграцию API и оптимизацию производительности. Моя цель - создавать функциональные и визуально привлекательные решения, которые соответствуют вашим ожиданиям.
              </motion.p>
            </div>

            {/* services */}
            <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full xl:max-w-[65%]"
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {serviceData.map((service, index) => (
                    <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-lg">{service.description}</p>
                    </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
  );
};

export default Services;