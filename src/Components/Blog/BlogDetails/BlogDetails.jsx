import React from "react";

import "./BlogDetails.css";

import blogdetail1 from "../../../Assets/Blog/blogDetail1.jpg";
import blogimage1 from "../../../Assets/Blog/blogDetail2.jpg";
import blogimage2 from "../../../Assets/Blog/blogDetail3.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const BlogDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="blogDetailsSection">
        <div className="blogDetailsSectionContainer">
          <div className="blogDetailsHeading">
            <h2>5 Tips to Increase Your Online Sales</h2>
            <div className="blogDetailsMetaData">
              <span>by admin</span>
              <span>May 19, 2023</span>
              <span>Trends</span>
            </div>
          </div>
          <div className="blogDetailsFeaturedImg">
            <img src={blogdetail1} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Increasing online sales requires a clear strategy: optimize
              product listings, improve site speed, provide compelling visuals,
              and offer straightforward checkout options. Focus on building
              trust through detailed product information and social proof.
            </p>
            <h5>
              Delivering Quality Products with Exceptional Shopping Experience
            </h5>
            <p>
              At Trend Cart, we believe shopping should be simple, enjoyable,
              and reliable. Every product is carefully selected to meet high
              standards of quality, style, and durability. Whether you're
              looking for everyday essentials or the latest fashion trends, our
              collection is designed to provide outstanding value while ensuring
              a smooth and satisfying shopping experience.
            </p>
            <div className="blogDetailsContentBullets">
              <div className="blogDetailsContentBulletscontent">
                <h5>Why Choose Our Products?</h5>
                <p>
                  <ul>
                    <li>
                      Crafted from premium-quality materials for maximum
                      comfort.
                    </li>
                    <li> Durable, stylish, and designed for everyday use.</li>
                    <li> Affordable pricing with uncompromised quality.</li>
                    <li> Fast delivery and secure packaging.</li>
                    <li>Easy returns and responsive customer support</li>
                  </ul>
                </p>
              </div>
              <div className="blogDetailsContentBulletscontent">
                <h5>Product Highlights</h5>
                <p>
                  <ol>
                    <li>Premium materials for long-lasting durability.</li>
                    <li>Comfortable fit with modern, stylish designs.</li>
                    <li>Wide range of sizes and color options.</li>
                  </ol>
                </p>
              </div>
            </div>
            <p>
              Our commitment goes beyond selling products—we strive to deliver
              value at every step of your shopping journey. From carefully
              curated collections to secure transactions and timely delivery, we
              focus on creating a seamless experience that keeps customers
              coming back. Your satisfaction is our highest priority, and we're
              dedicated to making every purchase worthwhile.
            </p>
          </div>
          <div className="blogDetailsContentImg">
            <img src={blogimage1} alt="" />
            <img src={blogimage2} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Every product at Trend Cart is carefully selected to combine
              quality, style, and affordability. We provide detailed
              descriptions, high-resolution images, secure payment options, and
              fast shipping to ensure a smooth and trustworthy shopping
              experience from start to finish.
            </p>
            <p>
              Customer satisfaction is our top priority. We continuously improve
              our products and services based on customer feedback to provide
              the best online shopping experience. Whether you're searching for
              the latest fashion trends or everyday essentials, Trend Cart is
              committed to delivering quality products, competitive prices, and
              reliable customer support you can trust.
            </p>
          </div>
          <div className="share-buttons">
            <button className="share-button facebook">
              <FaFacebookF /> Share on Facebook
            </button>
            <button className="share-button twitter">
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className="share-button pinterest">
              <FaPinterest /> Share on Pinterest
            </button>
            <button className="share-button more">
              <FaPlus size={20} />
            </button>
          </div>
          <div className="blogDetailsNextPrev">
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon"
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
              <p>Given Set was without from god divide rule Hath</p>
            </div>
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon2"
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
              <p style={{ textAlign: "right" }}>
                Tree earth fowl given moveth deep lesser after
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
