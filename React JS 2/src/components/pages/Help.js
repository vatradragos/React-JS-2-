import React from 'react';
import '../../App.css';
import HeroSectionHelp from '../HeroSectionHelp';
import '../HeroSectionHelp.css';
import Cards from '../CardsHelp';
import Footer from '../Footer';

export default function Help() {
  return (
    <>
      <HeroSectionHelp />
      <Cards />
      <Footer />
    </>
  );
}