import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Logo from '@/assets/Logo2.png';

export default function Footer() {
  return (
    <footer className="bg-[#0e2a47] text-white rounded">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image 
              src={Logo} 
              alt="Sukaryam Logo" 
              width={180} 
              height={50}
              className="object-contain rounded-md"
            />
            <p className="text-gray-300">
              Creating extraordinary events and unforgettable experiences with precision and passion.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#cc9e4b] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#cc9e4b] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#cc9e4b] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#cc9e4b] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Our Work', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-[#cc9e4b] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Corporate Events',
                'Social Events',
                'Wedding Planning',
                'MICE Solutions',
                'Artist Management'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-[#cc9e4b] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#cc9e4b] mt-1" />
                <div className="text-gray-300">
                  <p>Gurgaon Office:</p>
                  <p>1st Floor, N-272, Mayfield Gardens, Sector-51, Gurgaon - 122003</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#cc9e4b]" />
                <Link href="tel:+919717243531" className="text-gray-300 hover:text-[#cc9e4b]">
                  +91 9717243531
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#cc9e4b]" />
                <Link href="mailto:sukaryamworld@gmail.com" className="text-gray-300 hover:text-[#cc9e4b]">
                  sukaryamworld@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sukaryam. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-[#cc9e4b] text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#cc9e4b] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
