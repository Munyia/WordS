import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-sec text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold">Connect with Us</h2>
          <div className="flex space-x-6">
            {/* Social Media Icons */}
            <a
              href="mailto:wordsmitters@gmail.com?subject=Inquiry&body=Hello Wordsmitters,"
              className="hover:text-sec1 transition"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sec1 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.facebook.com/wordsmitters?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sec1 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sec1 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sec1 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="mt-8 border-t border-white pt-6 text-center">
          <p className="text-sm">© 2024 Wordsmitters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
