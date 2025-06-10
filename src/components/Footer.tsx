import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { wg } from "../assets/res";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer id="footer" className="bg-sec text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-start">
            {/* Brand & Contact */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img className="w-48 align-top" src={wg} alt="Wordsmitters Logo" />
              </div>
              <p className="text-white mb-6 max-w-md">
                Your trusted partner in premium ghostwriting and content creation.
                We transform your ideas into compelling narratives that resonate with your audience.
              </p>
              <div className="space-y-3 text-sm mb-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-sec1" size={16} />
                  <a href="mailto:info@wordsmitters.com.ng" className="hover:underline hover:text-sec1">
                    info@wordsmitters.com.ng
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-sec1" size={16} />
                  <a href="tel:+2347047223731" className="hover:underline hover:text-sec1">
                    +234 704 722 3731
                  </a>
                </div>
              </div>

              {/* Social Icons for large screens */}
              <div className="hidden md:flex space-x-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-[#1877F2] hover:opacity-80" size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#1DA1F2] hover:opacity-80" size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#E1306C] hover:opacity-80" size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-[#0077B5] hover:opacity-80" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-sec1 text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-white hover:text-pry transition">Home</Link></li>
                <li><Link to="/about" className="text-white hover:text-sec1 transition">About Us</Link></li>
                <li><Link to="/services" className="text-white hover:text-sec1 transition">Services</Link></li>
                <li><Link to="/portfolio" className="text-white hover:text-sec1 transition">Portfolio</Link></li>
                <li><Link to="/contact" className="text-white hover:text-sec1 transition">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <h3 className="font-semibold text-sec1 text-lg mb-4 text-left">Services</h3>
              <div className="grid grid-cols-1 justify-between sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                {[
                  'Ghostwriting',
                  'Book Writing',
                  'Graphic & Visual Storytelling',
                  'Heartfelt Features',
                  'Corporate Writing',
                  'Content Writing',
                  'Speechwriting',
                  'Academic & Research Writing',
                  'Editing & Proofreading',
                  'Creative Writing',
                  'Personal Content',
                  'Marketing & Copywriting',
                  'SEO Writing'
                ].map((service, index) => (
                  <Link
                    to="/services"
                    key={index}
                    className="text-white hover:text-sec1 transition block"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
            <p className="text-white opacity-80">
              © 2024 Wordsmitters. All rights reserved. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Social Icons - Fixed & Horizontal */}

<div className="fixed bottom-4 left-0 right-0 px-6 z-50 md:hidden flex justify-around items-center bg-transparent">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="text-[#1877F2]" size={24} />
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="text-black" size={24} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-[#E1306C]" size={24} />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-[#0077B5]" size={24} />
  </a>
  <a href="https://wa.me/2347047223731" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp className="text-[#25D366]" size={24} />
  </a>
<a href="mailto:info@wordsmitters.com.ng">
  <FaEnvelope className="text-[#D93025]" size={24} />
</a>

</div>

    </>
  );
};

export default Footer;
