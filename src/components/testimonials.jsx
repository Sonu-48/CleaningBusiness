import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL} from "react-icons/ri";

export const Testimonials = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <Slider {...settings}>
          {props.data
            && props.data.map((d, i) => (
               
                  <div className="testimonial" key={`${d.name}-${i}`}>
                    <div className="testimonial-icons">
                      <RiDoubleQuotesL/>
                    </div>
                    {/* <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div> */}
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      {/* <div className="testimonial-icons">
                        <RiDoubleQuotesR/>
                      </div> */}
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
              
              ))
            }
        </Slider>
        <div className="row"></div>
      </div>
    </div>
  );
};
