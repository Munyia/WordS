import React, { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const fullText = "WordSmitters";
  const animationDelay = 500; // 0.5 seconds between letters
  const stayDuration = 5000; // 5 seconds when the full text is displayed

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const animateText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(animateText, animationDelay);
      } else {
        timeout = setTimeout(() => {
          currentIndex = 0;
          setDisplayedText("");
          animateText();
        }, stayDuration);
      }
    };

    animateText();

    return () => clearTimeout(timeout);
  }, [fullText]);

  return (
    <nav className="p-4 flex font-merri justify-between h-24 items-center fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md">
      {/* Logo */}
      <div>
        <div className="text-4xl mb-3 text-sec font-bold">
          {displayedText.split("").map((letter, index) => (
            <span
              key={index}
              className={`dancing-text`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <p className="text-sec1 sm:text-sm text-xs pb-2">Expertly Carved Words, Seamlessly Yours</p>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
      </div>

      {/* Blur Background Overlay for Small Devices */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sliding Navigation Links (Small Devices Only) */}
      <div
        className={`fixed top-0 right-0 h-full w-[50vw]  shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 p-6 text-sm text-sec font-semibold">
        <Link to={'/'} className="hover:text-pry transition duration-300">
          Home
        </Link>
        <Link to={'/about'} className="hover:text-pry transition duration-300">
            About
          </Link>
        <Link to={'/services'} className="hover:text-pry transition duration-300">
          Services
        </Link>
          <a href="#contact" className="hover:text-pry transition duration-300">
            Contact
          </a>
        
        </div>
      </div>

      {/* Navigation Links for Larger Devices */}
      <div className="hidden md:flex space-x-4 text-lg text-sec font-semibold">
        <Link to={'/'} className="hover:text-pry transition duration-300">
          Home
        </Link>
        <Link to={'/about'} className="hover:text-pry transition duration-300">
            About
          </Link>
        <Link to={'/services'} className="hover:text-pry transition duration-300">
          Services
        </Link>
        <a href="#contact" className="hover:text-pry transition duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
