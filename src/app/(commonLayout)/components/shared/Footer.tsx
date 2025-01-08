import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Great Pet Care
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Caring for your pets is our top priority. Get tips, resources, and
              products to ensure your pets lead a healthy life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-all shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-all shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 rounded-full bg-pink-600 hover:bg-pink-700 transition-all shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 transition-all shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/health"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Pet Health
                </Link>
              </li>
              <li>
                <Link
                  href="/care"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Pet Care
                </Link>
              </li>
              <li>
                <Link
                  href="/newpet"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  New Pet Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  Pet Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400 leading-relaxed">
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

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024{" "}
            <span className="font-semibold text-white">Great Pet Care</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
