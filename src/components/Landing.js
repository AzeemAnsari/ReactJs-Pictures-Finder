import React from 'react';
import { Image } from 'react-bootstrap-icons';
import { LandingCotainer } from './Styles';
const Landing = () => {
  return (
    <LandingCotainer>
      <Image size={300} className="landingIcon" />
      <h2 className="text-uppercase mt-4 mt-md-5">Pictures Finder</h2>
    </LandingCotainer>
  );
};

export default Landing;
