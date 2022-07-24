import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../app/utils';
import HeroImage from '../components/HeroImage';
import PermitMap from '../components/PermitMap';
import bgLarge from '../img/bg_large2.jpg';

const EXTERNAL_CCA_LINK="https://training.usconcealedcarry.com/class/uscca-wi-ccw-certification/90d5ab94-b6c8-11ec-be7e-02420a000252"

export default ({...props}) => {
  useEffect(()=>setPageTitle("Home"),[]);

  return (
    <div className="Content">
      <HeroImage bgImage={bgLarge} innerStyle={{justifyContent:'center'}}>
        <h1 id="about" style={{margin:'0px', textAlign:'center'}}>Concealed Carry Classes in the Madison Area</h1>
      </HeroImage>
      <div className="summary">
        <p>
          Prairie CCW classes offer a comprehensive overview of the ins and outs of self defense, Wisconsin's concealed carry
          laws, and safe firearms usage. After taking our fully featured 6 hour course, participants will be fully qualified
          to apply for Wisconsin concealed carry license. Course contents include the following:
        </p>
        <ul style={{maxWidth:'650px'}}>
          <li>
            <span>
              Full overview of Wisconsin's concealed carry and self defense laws.
            </span>
          </li>
          <li>
            <span>
              Basic familiarity and safety overview for a variety of firearms types.
            </span>
          </li>
          <li>
            <span>
              Developing situational awareness and conflict avoidance techniques to prevent situations from escalating to the point where
              firearm use is necessary. 
            </span>
          </li>
          <li>
            <span>
              Inclusive, LGBTQ+ and BIPOC-friendly class environment.
            </span>
          </li>
        </ul>
        <p>
          Classes are taught by Bryce, a certified USCCA Concealed Carry &amp; Home Defense Fundamentals Instructor, and are held monthly
          at the Brink Lounge in Downtown Madison. Classes start at $60 and may be waived depending on need.
        </p>
      </div>
      <HeroImage bgImage={bgLarge}>
        <h1 id="register">Register for a Class</h1>
        <Button target="_blank" href={EXTERNAL_CCA_LINK} variant="contained">View Upcoming Classes</Button>
      </HeroImage>
      <div className="summary">
        <p>
          Holding a Wisconsin concealed carry license is the only legal way for a Wisconsin resident to concealed carry a firearm
          in the state of Wisconsin. In addition, the Wisconsin concealed carry license is honored in 30 states.
        </p>
        <PermitMap/>
      </div>
      <HeroImage bgImage={bgLarge} innerStyle={{justifyContent:'center'}}>
      </HeroImage>
    </div>
  )
}