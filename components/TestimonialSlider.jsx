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
        "Тимур создал для нас сайт для шиномонтажа. Он учел все наши пожелания, и сайт получился очень удобным для клиентов. Теперь у нас больше онлайн-записей!",
  },
  {
    image: "/t-avt-2.png",
    name: "Дмитрий",
    position: "Владелец автосервиса",
    company: "Автосервис",
    message:
        "Сайт, который разработал Тимур, значительно упростил нашу работу. Клиенты теперь могут легко записаться на услуги, а нам стало проще управлять расписанием.",
  },
  {
    image: "/t-avt-3.png",
    name: "Роберт",
    position: "Владелец компании",
    company: "Электромонтаж и связь",
    message:
        "Тимур сделал для нас сайт, который не только выглядит современно, но и помогает привлекать новых клиентов. Мы очень довольны результатом!",
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
                    <div className="text-lg sm:text-base">{person.name}</div>

                    {/* position */}
                    <div className="text-[12px] sm:text-[10px] uppercase font-extralight tracking-widest">
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
                  <div className="xl:text-lg text-sm text-center md:text-left">
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