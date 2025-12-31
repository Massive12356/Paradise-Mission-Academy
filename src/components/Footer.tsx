import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Paradise Mission Academy</h3>
                <p className="text-xs font-medium text-gray-400">Nurturing Young Minds</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Providing quality education from Crèche to JHS 1, building a foundation for excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors font-medium">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors font-medium">Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors font-medium">Admissions</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors font-medium">Gallery</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors font-medium">News & Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-medium">123 Education Avenue, Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-medium">+233 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-medium">info@paradisemissionacademy.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <p className="text-gray-400 text-sm mb-4 font-medium">
              Monday - Friday: 7:30 AM - 4:00 PM<br />
              Saturday: 8:00 AM - 12:00 PM<br />
              Sunday: Closed
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5 text-blue-500" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5 text-blue-500" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5 text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm ">
          <p className="font-medium">&copy; {new Date().getFullYear()} Paradise Mission Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
