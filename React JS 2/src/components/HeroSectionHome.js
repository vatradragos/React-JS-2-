import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSectionHome.css';

function HeroSectionHome() {
  return (
    <div className='hero-container-home'>
      <h1>STOP THE WARS!</h1>
      <p>Children's hearts bleed</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WARS NOW
        </Button>
        
        <Button2
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          HELP <i className='far fa-play-circle' />
        </Button2>
      </div>
    </div>
  );
}

export default HeroSectionHome;