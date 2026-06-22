import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about-1.jpg";
import about2 from "../../Assets/About/about-2.jpg";

import Services from "../../Components/Home/Services/Services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../Assets/Brands/brand1.png";
import brand2 from "../../Assets/Brands/brand2.png";
import brand3 from "../../Assets/Brands/brand3.png";
import brand4 from "../../Assets/Brands/brand4.png";
import brand5 from "../../Assets/Brands/brand5.png";
import brand6 from "../../Assets/Brands/brand6.png";
import brand7 from "../../Assets/Brands/brand7.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About Trend Cart</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h4>
            We curate thoughtfully designed collections that reflect global
            trends while prioritizing quality and sustainability.
          </h4>
          <p>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                To deliver stylish, high-quality apparel that is accessible
                and responsibly sourced for everyday wardrobes.
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                To be a trusted fashion destination recognized for innovation,
                sustainability, and exceptional customer experience.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="" />
            </div>
            <div className="textContent">
              <h3>The Company</h3>
              <p>
                Trend Cart is a modern fashion retailer dedicated to offering
                curated collections that blend style and quality. We work with
                trusted designers and partners to bring versatile pieces that
                suit everyday life while promoting responsible production.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="companyPartners">
        <h5>Company Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;
