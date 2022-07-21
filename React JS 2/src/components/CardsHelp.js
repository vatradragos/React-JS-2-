import React from 'react';
import './CardsHelp.css';
import CardItem from './CardItemHelp';

function CardsHelp() {
  return (
    <div className='cards'>
      <h1>Help us to support the lives of children who are suffering because of wars!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/help-img-1.jpg'
              text='UNICEF - for every child'
              label='DONATE'
              path=''
            />
            <CardItem
              src='images/help-img-2.jpg'
              text='Save the Children'
              label='DONATE'
              path=''
            />
            <CardItem
              src='images/help-img-3.jpg'
              text='One sky - for all children'
              label='DONATE'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/help-img-4.jpeg'
              text='Simba for kids'
              label='DONATE'
              path=''
            />
            <CardItem
              src='images/help-img-5.jpg'
              text='S.O.S.'
              label='DONATE'
              path=''
            />
            <CardItem
              src='images/help-img-6.jpg'
              text='Savoire Oser'
              label='DONATE'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/help-img-7.png'
              text='Les Pitchounets du Monde'
              label='DONATE'
              path=''
            />
            <CardItem
              src='images/help-img-8.png'
              text='Association RANIME'
              label='DONATE'
              path=''
            />
            <CardItem
              src='images/help-img-9.png'
              text='Solidarite'
              label='DONATE'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsHelp;
