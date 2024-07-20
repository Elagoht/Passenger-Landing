"use client"

import Image from "next/image"
import { FC } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/zoom"
import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const images = [
  "dashboard",
  "desktop",
  "add-passphrase",
  "detective",
  "news",
  "settings"
]

const HeroSlider: FC = () =>
  <Swiper
    loop
    grabCursor
    effect="fade"
    centeredSlides
    navigation={true}
    slidesPerView="auto"
    centerInsufficientSlides
    autoplay={{
      delay: 4000,
      pauseOnMouseEnter: true
    }}
    zoom={{ toggle: true }}
    pagination={{ clickable: true }}
    modules={[
      Pagination,
      Navigation,
      Autoplay,
      Zoom
    ]}
  >
    {images.map((image, index) =>
      <SwiperSlide
        key={index}
      >
        <div className="swiper-zoom-container">
          <Image
            src={`/assets/screenshots/${image}.png`}
            alt={image}
            width={1080}
            height={1920}
            className="mx-auto w-max object-contain slide-image"
          />
        </div>
      </SwiperSlide>
    )}
  </Swiper>

export default HeroSlider