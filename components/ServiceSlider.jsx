import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxMix,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxFontBold,
  RxMobile,
  RxGear,
} from "react-icons/rx";
import style from "./css/ServicesSlider.module.css";

const ServiceSlider = () => {
  const { t } = useTranslation("services");

  const serviceData = [
    {
      icon: <RxDesktop />,
      title: t("serviceTitleDevelopment"),
      description: t("serviceDescDevelopment"),
    },
    {
      icon: <RxRocket />,
      title: t("serviceTitleSEO"),
      description: t("serviceDescSEO"),
    },
    {
      icon: <RxCrop />,
      title: t("serviceTitleBranding"),
      description: t("serviceDescBranding"),
    },
    {
      icon: <RxPencil2 />,
      title: t("serviceTitleCopywriting"),
      description: t("serviceDescCopywriting"),
    },
    {
      icon: <RxReader />,
      title: t("serviceTitleConsultation"),
      description: t("serviceDescConsultation"),
    },
    {
      icon: <RxMix />,
      title: t("serviceTitleTeacher"),
      description: t("serviceDescTeacher"),
    },
    {
      icon: <RxMobile />,
      title: t("serviceTitleResponsiveDesign"),
      description: t("serviceDescResponsiveDesign"),
    },
    {
      icon: <RxFontBold />,
      title: t("ServiceECommerceSolutions"),
      description: t("serviceDescECommerceSolutions"),
    },
    {
      icon: <RxGear />,
      title: t("serviceTitleFrontendOptimization"),
      description: t("serviceDescFrontendOptimization"),
    },
  ];

  return (
    <Swiper
      dir="ltr"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className={style.servicesSlider}
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={style.swiperSlideBox}>
              {/* icon */}
              <div className={style.icon}>{item.icon}</div>
              {/* title & description*/}
              <div className={style.titleParagraphBox}>
                <div className={style.title}>{item.title}</div>
                <p className={style.paragraphDescription}>{item.description}</p>
              </div>
              {/* arrow */}
              <div className={style.arrowBox}>
                <RxArrowTopRight className={style.arrowReactIcon} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
