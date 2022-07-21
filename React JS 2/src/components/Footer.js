import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Join the campaigns to help children suffering from the war</p>
        <p className='footer-subscription-text'>You can register whenever you want</p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              id='input'
            />
            <button type="submit" id='submit'>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Who we are</Link>
            <Link to='/tears'>True stories</Link>
            <Link to='/help'>How can you help</Link>
            <Link to='/wars-now'>War's children</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Donation</Link>
            <Link to='/'>Volunteering</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Help</h2>
            <Link to={{ pathname: "https://www.unicef.org/" }} target="_blank">Unicef</Link>
            <Link to={{ pathname: "https://www.savethechildren.org/" }} target="_blank">Save the Children</Link>
            <Link to={{ pathname: "https://onesky.org/" }} target="_blank">One Sky</Link>
            <Link to={{ pathname: "https://www.simbaforkids.ch/" }} target="_blank">Simba for Kids</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.instagram.com/unicef/" }} target="_blank">Instagram</Link>
            <Link to={{ pathname: "https://www.facebook.com/savethechildrenuk" }} target="_blank">Facebook</Link>
            <Link to={{ pathname: "https://www.youtube.com/watch?v=hbxNHFk1qTA" }} target="_blank">Youtube</Link>
            <Link to={{ pathname: "https://twitter.com/unicef" }} target="_blank">Tweeter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to={{ pathname: "https://dragosvatra.ro/" }} target="_blank" className='social-logo'>
            Created by Dragoş Vatră Ⓒ 2021-2022 All rights reserved
            </Link>
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_self'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_self'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_self'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_self'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_self'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
