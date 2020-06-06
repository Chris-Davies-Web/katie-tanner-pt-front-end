import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import Fade from "react-reveal/Fade"
import {
  faDumbbell,
  faUtensils,
  faVideo,
  faStopwatch,
  faWeight,
  faFemale,
  faMale,
  faRunning,
  faHeartbeat,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faDumbbell,
  faUtensils,
  faVideo,
  faStopwatch,
  faFemale,
  faMale,
  faRunning,
  faHeartbeat,
  faWeight,
  faCarrot
)

const Service = ({ data }) => {
  return (
    <div className="service">
      <Fade left cascade>
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${data.acf.service_image.source_url})`,
          }}
        ></div>
        <div className="copy-container">
          {/* <FontAwesomeIcon icon={data.acf.service_icon} /> */}
          <h3 dangerouslySetInnerHTML={{ __html: data.acf.service_name }} />
          <div dangerouslySetInnerHTML={{ __html: data.acf.service_summary }} />
        </div>
      </Fade>
    </div>
  )
}

export default Service
