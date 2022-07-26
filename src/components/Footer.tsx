import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter} from 'react-icons/fa';

export default ({...props}) => {
  return (
    <div className="Footer">

      <div className="link-holder">
        <span>© 2022 Heroes' Guild Community Defense</span>
      </div>
      <div className="link-holder">
        <h2>Contact</h2>
        <span>Bryce Connor</span>
        <span>608-440-5480</span>
        <span>
          <a target="_blank" href="https://training.usconcealedcarry.com/instructor/967c26ca-afb8-11ec-8e40-02420a0002b4">
            USCCA Instructor Page
          </a>
        </span>
      </div>
      <div className="acknowledgements">
        <span>
          <a target="_blank" href="https://icons8.com/icon/10091/barley">Barley</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </span>
        <span>"Restormel Castle Interior. Panorama. Nikon D3100. DSC_0651" by Robert.Pittman is licensed under CC BY-ND 2.0.</span>
      </div>
    </div>
  )
}