import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div  id="about"
    aria-label="Footer Section"
    className="w-1280 h-100 flex   items-end  bg-[#495e57]">
      <footer className="w-full text-white bg-[#495e57] body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a href="/" className="flex items-center justify-center font-medium  text-white title-font md:justify-start">
              {/* Replace the SVG with the appropriate icon */}
              <FaFacebook className="w-auto h-5 text-white" />
            </a>
            <p className="mt-2 text-sm text-white">Design, Code and Ship!</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="/" className="text-white cursor-pointer hover:text-gray-700">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="/" className="ml-3 text-white cursor-pointer hover:text-gray-700">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="/" className="ml-3 text-white cursor-pointer hover:text-gray-700">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="/" className="ml-3 text-white cursor-pointer hover:text-gray-700">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">About</h2>
              <nav className="mb-10 list-none">
                <a href="/" className="text-white cursor-pointer hover:text-gray-900">Company</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">Careers</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">Blog</a>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
              <nav className="mb-10 list-none">
                <a href="/" className="text-white cursor-pointer hover:text-gray-900">Contact Support</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">Help Resources</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">Release Updates</a>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform</h2>
              <nav className="mb-10 list-none">
                <a href="/" className="text-white cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">Pricing</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">FAQ</a>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Contact</h2>
              <nav className="mb-10 list-none">
                <a href="/" className="text-white cursor-pointer hover:text-gray-900">Send a Message</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">Request a Quote</a>
                <a href="/" className="mt-3 text-white cursor-pointer hover:text-gray-900">+123-456-7890</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
