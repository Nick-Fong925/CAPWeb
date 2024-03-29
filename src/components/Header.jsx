import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CapLogo from "../assets/Header/CapLogoWhite.png";
import instagramIcon from "../assets/socialmedia/instagram.png";
import tiktokIcon from "../assets/socialmedia/tiktok.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  // Show/hide the "About Us" dropdown


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);


    scrollToTop();
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add an event listener to all links to scroll to the top
  const addScrollToTopEventListener = () => {
    const links = document.querySelectorAll("Link");

    links.forEach((link) => {
      link.addEventListener("click", scrollToTop);
    });
  };

  // Call the function when the component mounts
  useEffect(() => {
    addScrollToTopEventListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-950 shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-black font-bold hover-animation relative"
            onClick={scrollToTop}
          >
            <img src={CapLogo} alt="Cap logo" className="pl-10 w-40 h-auto" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-16">
          {/*}
          <li
            className="relative group group-hover:block"
            onMouseEnter={handleAboutUsDropdown}
            onMouseLeave={() => setOurEventsDropdown(false)}
          >
            <Link
              to="/"
              className="text-white font-extrabold  hover:text-lime-400"
              onClick={scrollToTop}
            >
              EVENTS
            </Link>
            {showOurEventsDropdown && (
              <ul className="absolute py-2 bg-blue-950 w-6/2">
                <li>
                  <Link
                    to="/BingStory"
                    className="block px-4 py-2 text-white sfont-semibold hover:bg-lime-400"
                    onClick={scrollToTop}
                  >
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/MelonaStory"
                    className="block px-4 py-2 text-white font-semibold hover:bg-lime-400"
                    onClick={scrollToTop}
                  >
                    Upcoming Events
                  </Link>
                </li>
              </ul>
            )}
          </li>
            */}
             <li className="relative group group-hover:block">
            <Link
              to="/"
              className="text-white font-extrabold  hover:text-lime-400 text-xs"
              onClick={scrollToTop}
            >
              EVENTS
            </Link>
          </li>
          <li className="relative group group-hover:block">
            <Link
              to="/"
              className="text-white font-extrabold  hover:text-lime-400 text-xs"
              onClick={scrollToTop}
            >
              MISSION
            </Link>
          </li>
          <li className="relative group group-hover:block">
            <Link
              to="/TeamPage"
              className="text-white font-extrabold  hover:text-lime-400 text-xs"
              onClick={scrollToTop}
            >
              OUR TEAM
            </Link>
          </li>
          <li className="relative group group-hover:block">
            <Link
              to="/Contact"
              className="text-white font-extrabold  hover:text-lime-400 text-xs md:mr-10"
              onClick={scrollToTop}
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-black font-bold mr-10 relative ${
            mobileMenuOpen ? "open" : ""
          } ${mobileMenuOpen ? "close" : ""}`}
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
  className={`md:hidden fixed top-0 left-0 w-full h-full bg-blue-950 border-l border-gray-200 shadow-lg p-4 transform transition-transform duration-300 ${
    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <button
    className="md:hidden text-black font-bold absolute top-4 right-4"
    onClick={toggleMobileMenu}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </button>
  {/* Menu Items */}
  <ul className="flex flex-col space-y-4 mt-10 text-center">
    <li>
      <Link
        to="/"
        className="text-white font-bold text-xl hover:text-lime-400"
        onClick={toggleMobileMenu}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/TeamPage"
        className="text-white font-bold text-xl hover:text-lime-400"
        onClick={toggleMobileMenu}
      >
        Our Team
      </Link>
    </li>
    <li>
      <Link
        to="/Contact"
        className="text-white font-bold text-xl hover:text-lime-400"
        onClick={toggleMobileMenu}
      >
        Contact Us
      </Link>
    </li>
  </ul>
  
  {/* Centered Icons */}
  <div className="flex justify-center mt-4 gap-6">
    <a
      href="https://www.instagram.com/ubcsaudercap/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagramIcon} alt="Instagram Icon" className="w-6 h-6" />
    </a>
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={tiktokIcon} alt="TikTok Icon" className="w-6 h-6" />
    </a>
  </div>
</div>


      </nav>
    </header>
  );
}
export default Header;
