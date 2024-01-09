"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/assets/images/wal1.jpg', alt: 'wallpaper-moda'},
  { imgUrl: '/assets/images/wal2.jpg', alt: 'wallpaper-show'},
  { imgUrl: '/assets/images/wal3.jpg', alt: 'wallpaper-show'},
  { imgUrl: '/assets/images/wal4.jpg', alt: 'wallpaper-Esports'},
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel-wrapper relative w-full h-full dark:opacity-20 opacity-100" >
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image 
            src={image.imgUrl}
            alt={image.alt}
            width={1484}
            height={1484}
            className="object-cover w-full h-full"
            key={image.alt}
            priority
          />
        ))}
      </Carousel>

    </div>
  )
}

export default HeroCarousel