import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: '#000000', margin: '2rem 0' }}>Chetti Street Pattukkottai</p>
        <p className="p__cormorant" style={{ color: '#00008B', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans" style={{ color: '#000000', margin: '2rem 0' }}>Mon - Fri: 10:00 am - 02:00 pm</p>
        <p className="p__opensans" style={{ color: '#000000', margin: '2rem 0' }} >Sat - Sun: 10:00 am - 03:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.kebab} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
