import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import InitialMainPopup from './InitialMainPopup';

const Hero = ({first, buttons, h1, p, videoPoster, count}) => {
  const [initialPopup, setInitialPopup] = useState(false);

  useEffect(() => {

    setInitialPopup(true);
  }, []);
  return (
    <div>
      {
        first && (initialPopup && <InitialMainPopup setInitialPopup={setInitialPopup}/>)
      }

      <div className={`hero_section ${count}`}>
        <div className="hero_left">
          <h1>{h1}</h1>
          <p>{p}</p>
          <div className="hero_left_buttons">
            {
              buttons.map(({title, svg}, index) => {
                return <NavLink className={title.split(" ").join("_")}>
                  {svg && svg}
                  {title}
                  </NavLink>
              })
            }
          </div>
        </div>
        <div className="hero_right">
          <video
            height="544"
            width="900"
            className="hero_video"
            title="Team discussing work in the Slack app"
            data-js-id="hero"
            loop
            muted
            playsInline
            poster={videoPoster}
          >
          </video>
        </div>
      </div>
    </div>
  )
}

export default Hero
