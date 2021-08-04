import React, { useEffect, useState } from "react";
import "./Testimonial.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function CenterMode() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((response) => setTestimonial(response.data));
  }, []);

  return (
    <div className="testimonial">
      <Slider
        className="center mx-5 slider"
        centerMode={true}
        infinite={true}
        slidesToShow={2}
        centerPadding="60px"
        speed={500}
        arrows={true}
        style={{ margin: 0 }}
      >
        {testimonial.map((item, i) => {
          return (
            <div key={i} className="img-card">
              <div class="card-body">
                <div className="card-title">{item.by}</div>
                <div className="card-text">{item.testimony}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
