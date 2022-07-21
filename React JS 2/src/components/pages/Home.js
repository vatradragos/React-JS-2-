import React from 'react';
import '../../App.css';
import Cards from '../CardsHome';
import HeroSectionHome from '../HeroSectionHome';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSectionHome />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;