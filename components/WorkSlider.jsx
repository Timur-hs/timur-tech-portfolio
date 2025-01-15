import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "http://example.com",
        },
        {
          title: "NDA",
          path: "/thumb3.jpg",
        },
        {
          title: "NDA",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "http://example.com",
        },
        {
          title: "NDA",
          path: "/thumb2.jpg",
        },
        {
          title: "NDA",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
      <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {slide.images.map((image, imageI) => (
                    <div
                        className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                        key={imageI}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                            src={image.path}
                            alt={image.title}
                            width={500}
                            height={300}
                        />

                        {/* overlay gradient */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-l ${
                                image.title === "NDA"
                                    ? "from-transparent via-[#ff0000] to-[#ffa500]"
                                    : "from-transparent via-[#e838cc] to-[#4a22bd]"
                            } opacity-0 group-hover:opacity-80 transition-all duration-700`}
                            aria-hidden
                        />

                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          {image.title === "NDA" ? (
                              <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                <div className="delay-100">NDA</div>
                              </div>
                          ) : (
                              <Link
                                  href={image.link}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                              >
                                <div className="delay-100">LIVE</div>
                                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                  PROJECT
                                </div>
                              </Link>
                          )}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default WorkSlider;