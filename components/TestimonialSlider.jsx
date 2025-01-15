import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Пример данных для отзывов
const testimonialsData = [
  {
    image: "/t-avt-1.png",
    name: "Регина",
    position: "Владелец шиномонтажа",
    company: "Шиномонтаж",
    message:
        "Тимур создал для нас сайт для шиномонтажа, и мы остались очень довольны результатом. Он внимательно отнесся к нашим пожеланиям и смог воплотить все наши идеи в жизнь. Сайт получился функциональным и привлекательным. Рекомендую Тимура всем, кто ищет профессионального разработчика.",
  },
  {
    image: "/t-avt-2.png",
    name: "Дмитрий",
    position: "Владелец автосервиса",
    company: "Автосервис",
    message:
        "Тимур разработал для нас сайт автосервиса, и мы очень довольны результатом. Он смог создать удобный и функциональный интерфейс, который помогает нашим клиентам легко находить нужную информацию и записываться на обслуживание. Рекомендую Тимура всем, кто ищет надежного разработчика.",
  },
  {
    image: "/t-avt-3.png",
    name: "Роберт",
    position: "Владелец компании",
    company: "Электромонтаж и связь",
    message:
        "Тимур создал для нас сайт компании по электромонтажу и связи. Он смог создать современный и функциональный сайт, который помогает нам привлекать новых клиентов и улучшать наше взаимодействие с ними. Рекомендую Тимура всем, кто ищет профессионального разработчика.",
  },
];

const TestimonialSlider = () => {
  return (
      <Swiper
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="h-[400px]"
      >
        {testimonialsData.map((person, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                {/* avatar, name, position */}
                <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* avatar */}
                    <div className="mb-2 mx-auto">
                      <Image
                          src={person.image}
                          width={100}
                          height={100}
                          alt={person.name}
                          className="rounded-full"
                      />
                    </div>

                    {/* name */}
                    <div className="text-lg">{person.name}</div>

                    {/* position */}
                    <div className="text-[12px] uppercase font-extralight tracking-widest">
                      {person.position}, {person.company}
                    </div>
                  </div>
                </div>

                {/* quote & message */}
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                  {/* quote icon */}
                  <div className="mb-4">
                    <FaQuoteLeft
                        className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                        aria-hidden="true"
                    />
                  </div>

                  {/* message */}
                  <div className="xl:text-lg text-center md:text-left">
                    {person.message}
                  </div>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default TestimonialSlider;