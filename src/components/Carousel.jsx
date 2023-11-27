import React, { useState } from 'react'
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [count, setCount] = useState(0)

  const increaseC = () => {
    if (count < 2) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
  }

  const decrementC = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(2)
    }
  }

  return (
    <div className="mainBody">
      <div onClick={increaseC}>
        <div className="backward">
          <ArrowBackIosIcon />
        </div>
      </div>
      <div className="title">
        {images[count].title}
      </div>
      <img src={images[count].img} alt="" />
      <div className="footer">
        {images[count].subtitle}
      </div>
      <div onClick={decrementC}>
        <div className="forward">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Carousel
