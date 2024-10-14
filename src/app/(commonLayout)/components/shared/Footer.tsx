import Link from "next/link";
// import { Facebook, Twitter, Instagram, LinkedIn } from "lucide-react"; // Icons for social media
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Great Pet Care</h3>
            <p className="text-gray-400 mb-4">
              Caring for your pets is our top priority. Get tips, resources, and
              products to ensure your pets lead a healthy life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6 text-blue-700" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-6 w-6 text-blue-700" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6 text-blue-700" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-6 w-6 text-blue-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/health" className="text-gray-400 hover:text-white">
                  Pet Health
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-gray-400 hover:text-white">
                  Pet Care
                </Link>
              </li>
              <li>
                <Link href="/newpet" className="text-gray-400 hover:text-white">
                  New Pet Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white"
                >
                  Pet Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              123 Pet Care St.
              <br />
              Cityville, CA 12345
            </p>
            <p className="text-gray-400 mt-4">
              Email: support@greatpetcare.com
            </p>
            <p className="text-gray-400 mt-2">Phone: +1 800 123 4567</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© 2024 Great Pet Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
