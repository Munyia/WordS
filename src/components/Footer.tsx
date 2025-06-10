import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { wg } from "../assets/res";

const Footer = () => {
  return (
    <footer id="footer" className="bg-sec text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-start">
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img className="w-48 align-top" src={wg} alt="" />
            </div>
            <p className="text-white mb-6 max-w-md">
              Your trusted partner in premium ghostwriting and content creation. 
              We transform your ideas into compelling narratives that resonate with your audience.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="text-sec1"  size={16} />
                <a href="mailto:info@wordsmitters.com" className="hover:underline hover:text-sec1">
                  info@wordsmitters.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-sec1" size={16} />
                <a href="tel:+2347047223731" className="hover:underline hover:text-sec1">
                  +234 704 722 3731
                </a>
              </div>
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
  );
};

export default Footer;
