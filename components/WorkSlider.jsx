import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import style from "./css/WorkSlider.module.css";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Netflix Clone",
          path: "/pj1-r1-c1.jpg",
        },
        {
          title: "Good News App",
          path: "/pj2-r1-c2.jpg",
        },
        {
          title: "Best Weather App",
          path: "/pj3-r2-c1.jpg",
        },
        {
          title: "Grocery Shop UI",
          path: "/pj4-r2-c2.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "Netflix clone",
          path: "/pj5-r1-c1.jpg",
        },
        {
          title: "Google Home UI",
          path: "/pj6-r1-c2.jpg",
        },
        {
          title: "Best Weather App",
          path: "/pj7-r2-c1.jpg",
        },
        {
          title: "Tanveer portfolio",
          path: "/og.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const { t } = useTranslation("work");
  return (
    <Swiper
      dir="ltr"
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={style.workSlider}
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={style.swiperSliderGridBox}>
              {slide.images.map((image, index) => (
                <div key={index} className={style.sliderImageBox}>
                  <div className={style.sliderImage}>
                    <Image
                      src={image.path}
                      width={280}
                      height={140}
                      alt="Projects Pic"
                      className={style.pics}
                    />

                    {/* overlay gradient */}
                    <div className={style.overlayGradient}></div>
                    {/* title */}
                    <div className={style.titleBox}>
                      <div className={style.allTitle}>
                        {/* title Part 1 */}
                        <div className={style.titlePartOne}>{t("live")}</div>
                        {/* title part 2 */}
                        <div className={style.titlePartTwo}>{t("project")}</div>
                        {/* icon */}
                        <div className={style.icon}>
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
