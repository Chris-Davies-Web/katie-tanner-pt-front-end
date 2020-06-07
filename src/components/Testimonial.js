import React from "react"
import Swiper from "./Swiper"
import Fade from "react-reveal/Fade"

const Testimonial = ({ data }) => {
  return (
    <div className="testimonial">
      <Fade>
        {data.acf.before_image && data.acf.after_image ? (
          <Swiper
            before_image={data.acf.before_image}
            after_image={data.acf.after_image}
          />
        ) : data.acf.general_image ? (
          <img src={data.acf.general_image.source_url} />
        ) : (
          ""
        )}
        <h3 dangerouslySetInnerHTML={{ __html: data.acf.client_name }} />
        <div dangerouslySetInnerHTML={{ __html: data.acf.testimonial_quote }} />
      </Fade>
    </div>
  )
}

export default Testimonial
