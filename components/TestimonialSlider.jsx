import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import style from "./css/TestimonialSlider.module.css";
import Image from "next/image";

// testimonial data


const TestimonialSlider = () => {
  const { t } = useTranslation("testimonials");


  const testimonialData = [
    {
      image: "/t-avt-1.png",
      name: t("clientNameOne"),
      position: t("clientDesignationCustomer"),
      message: t("clientWordsParaTwo"),
    },
    {
      image: "/t-avt-2.png",
      name: t("clientNameTwo"),
      position: t("clientDesignationPrinciple"),
      message: t("clientWordsParaOne"),
    },
    {
      image: "/t-avt-3.png",
      name: t("clientNameThree"),
      position: t("clientDesignationStudent"),
      message: t("clientWordsParaThree"),
    },
  ];


  return (
    <Swiper dir="ltr"
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className={style.testimonialSlider}
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={style.swiperTestimonialSlider}>
              {/* Avtar , Name,  position */}
              <div className={style.avatarNamePositionBox}>
                <div className={style.innerBox}>
                  {/* avtar */}
                  <div className={style.avatar}>
                    <Image src={person.image} width={100} height={100} alt="ProfilePicOfClients"/>
                  </div>
                  {/* name */}
                  <div className={style.name}>{person.name}</div>
                  {/* position */}
                  <div className={style.position}>{person.position}</div>
                </div>
              </div>

              {/* quotes & message */}
              <div className={style.quotesIconMessagesBox} >
                {/* quotes icon */}
                <div className={style.quoteIconBox}>
                  <FaQuoteLeft className={style.quoteIcon}/>
                </div>
                {/* message */}
                <dir className={style.message}>{person.message}</dir>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
