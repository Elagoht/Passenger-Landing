"use client"

import Image from "next/image"
import { FC } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const images = [
  "dashboard",
  "add-passphrase",
  "detective",
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
    pagination={{ clickable: true }}
    modules={[
      Pagination,
      Navigation,
      Autoplay
    ]}
  >
    {images.map((image, index) =>
      <SwiperSlide
        key={index}
      >
        <Image
          src={`/assets/screenshots/${image}.png`}
          alt={image}
          width={504}
          height={809}
          className="mx-auto object-contain slide-image"
        />
      </SwiperSlide>
    )}
  </Swiper>

export default HeroSlider