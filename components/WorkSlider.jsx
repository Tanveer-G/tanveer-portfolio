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
          title: "PayForm Pro",
          path: "/payformpro.png",
          link: "https://tanveer-payformpro.vercel.app",
        },
        {
          title: "Good News App",
          path: "/goodnews.png",
          link: "https://tanveer-goodnews.vercel.app",
        },
        {
          title: "ZipSearch",
          path: "/zipsearch.png",
          link: "https://tanveer-zipsearch.vercel.app",
        },
        {
          title: "Grocery Shop UI",
          path: "/grocery.jpg",
          link: "https://github.com/Tanveer-G",
        },
      ],
    },
    {
      images: [
        {
          title: "Block Buster",
          path: "/blockbuster.jpg",
          link: "https://github.com/Tanveer-G",
        },
        {
          title: "Google Home UI",
          path: "/googleui.jpg",
          link: "https://github.com/Tanveer-G",
        },
        {
          title: "Best Weather App",
          path: "/bestweather.jpg",
          link: "https://github.com/Tanveer-G",
        },
        {
          title: "Tanveer portfolio",
          path: "/og.png",
          link: "https://tanveer-portfolio.vercel.app/en-US",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const { t } = useTranslation("work");
  return (
    (<Swiper
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
          (<SwiperSlide key={index}>
            <div className={style.swiperSliderGridBox}>
              {slide.images.map((image) => (
                <div key={image?.link + image?.title} className={style.sliderImageBox}>
                  <a href={image?.link} className={style.sliderImage}>
                    <Image
                        src={image?.path}
                        width={280}
                        height={140}
                        alt={image?.title}
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
                  </a>
                </div>
              ))}
            </div>
          </SwiperSlide>)
        );
      })}
    </Swiper>)
  );
};

export default WorkSlider;
