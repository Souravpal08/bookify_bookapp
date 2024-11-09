import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import FooterLogo from '../assets/FooterLogo.webp'



const Footer = () => {
  return (
    <div>
     <footer className="footer bg-gray-300 text-base-content p-10">
  <aside>
   <img src={FooterLogo} alt="logo" className='w-20 h-20' />
    <h2 className='text-3xl font-semibold'>Bookify</h2>
    <p className='font-semibold'>Authorized book store and online book-dealer </p>
    <div className='flex gap-4 mt-3'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
    </div>
  </aside>
  <nav>
    <h6 className="footer-title ">Services</h6>
    <a className="">Branding</a>
    <a className="">Selling</a>
    <a className="">Marketing</a>
    <a className="">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="">Email: bookifysp@gmail.com</a>
    <a className="">Contact:+33 98485 220136</a>
    <a className="">Support</a>
    <a className="">Jobs</a>
  </nav>
  <nav>
    <h6 className="footer-title ">Legal</h6>
    <a className="">Terms of use</a>
    <a className="">Privacy policy</a>
    <a className="">Cookie policy</a>
    <a className="">Sales terms</a>

  </nav>
 
</footer>
 <div className='flex justify-center items-center '>
    <h4 className='py-3'>All design and documents are reserved. Copyright @ <span className='font-semibold'>Bookify</span> 2024</h4>
  </div>
    </div>
  )
}

export default Footer
