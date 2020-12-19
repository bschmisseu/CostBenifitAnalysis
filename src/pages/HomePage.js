import React from 'react';

import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import CallToAction from '../components/CallToAction';
import Why from '../components/Why';
import Footer from '../components/Footer';

export default function IndexPage() {
  
  return (
    <React.Fragment>

      <Navbar />
      <HeroBanner />
      <CallToAction />
      <Why />
      <Footer/>

    </React.Fragment>
  );
}

