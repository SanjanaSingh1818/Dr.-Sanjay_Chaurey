'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground py-12 md:py-16 overflow-hidden">
      
      {/* Top Glow Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[80px] bg-white/10 blur-2xl pointer-events-none" />

      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Sanjay Chaurey</h3>
            <p className="text-sm opacity-90">
              Senior Consultant Surgeon with 35+ years of experience in minimally invasive and robotic surgery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
              <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold mb-4">Treatments</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/delhi/treatment/laparoscopic-surgery" className="hover:underline">Laparoscopic Surgery</Link></li>
              <li><Link href="/delhi/treatment/robotic-surgery" className="hover:underline">Robotic Surgery</Link></li>
              <li><Link href="/delhi/treatment/hernia-treatment" className="hover:underline">Hernia Treatment</Link></li>
              <li><Link href="/delhi/treatment/anorectal-diseases" className="hover:underline">Anorectal Diseases</Link></li>
              <li><Link href="/delhi/treatment/complex-fistula-treatment" className="hover:underline">Fistula Treatment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <Link href="tel:+91-9971145913" className="hover:underline">
                  +91-9971145913
                </Link>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <Link href="mailto:contact@drsanjaychaurey.com" className="hover:underline">
                  contact@drsanjaychaurey.com
                </Link>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <Link
                  href="https://maps.google.com/?q=PSRI+Hospital,+J+Pocket,+Sheikh+Sarai,+New+Delhi,+Delhi+110017"
                  className="hover:underline"
                >
                  PSRI Hospital, J Pocket, Sheikh Sarai, New Delhi, Delhi 110017
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left */}
          <p className="text-sm opacity-80">
            Powered by{" "}
            <a
              href="https://genesisvirtue.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:opacity-80"
            >
              Genesis Virtue
            </a>
          </p>

          {/* Center */}
          <p className="text-sm opacity-90">
            &copy; {currentYear} Dr. Sanjay Chaurey. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/drsanjay_chaurey/" className="hover:opacity-75 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Facebook size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}