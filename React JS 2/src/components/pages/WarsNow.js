import React from 'react';
import '../../App.css';
import HeroSectionWarsNow from '../HeroSectionWarsNow';
import '../HeroSectionWarsNow';
import Iframe from '../Iframe';
import TableAfrica from '../TableAfrica';
import TableAsia from '../TableAsia';
import TableEurope from '../TableEurope';
import TableNorthAmerica from '../TableNorthAmerica';
import TableSouthAmerica from '../TableSouthAmerica';
import TableChildren from '../TableChildren';
import Footer from '../Footer';

export default function WarsNow() {
  return (
    <>
      <HeroSectionWarsNow />
      <Iframe />
      <TableAfrica />
      <TableAsia />
      <TableEurope />
      <TableNorthAmerica />
      <TableSouthAmerica />
      <TableChildren />
      <Footer />
    </>
  );
}