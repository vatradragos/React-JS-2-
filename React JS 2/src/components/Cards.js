import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>In war, children's hearts bleed, but often they don't show it!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/home-img-1.jpg'
              text='Most of the time, the stories behind the childrens tears are shocking'
              label='TEARS'
              path='/tears'
            />
            <CardItem
              src='images/home-img-2.jpg'
              text='Most dangerous countries for children in conflict'
              label='WARS NOW'
              path='/wars-now'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/home-img-3.jpg'
              text='UNICEF - for every child'
              label='HELP'
              path='/help'
            />
            <CardItem
              src='images/home-img-4.jpg'
              text='Save the Children'
              label='HELP'
              path='/help'
            />
            <CardItem
              src='images/home-img-5.jpg'
              text='One sky - for all children'
              label='HELP'
              path='/help'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
