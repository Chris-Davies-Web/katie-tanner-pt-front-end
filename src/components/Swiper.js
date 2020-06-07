import React from "react"
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider"

const Swiper = ({ before_image, after_image }) => {
  return (
    <div className="swiper">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={before_image.source_url}
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after_image.source_url}
            alt="Image two"
          />
        }
      />
    </div>
  )
}

export default Swiper
