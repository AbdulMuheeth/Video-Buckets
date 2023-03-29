import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from '../../others/sliderFunctions';

const SliderIn = (props) => {
  return (
    <>
        <Slider {...settings}>
            {props.children}
        </Slider>
    </>
  )
}

export default SliderIn