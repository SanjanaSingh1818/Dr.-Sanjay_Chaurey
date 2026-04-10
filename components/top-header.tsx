'use client';

import { Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAppointment } from '@/contexts/appointment-context';

export function TopHeader() {
  const { openAppointment } = useAppointment();
  return (
    <div className="bg-secondary text-secondary-foreground border-b border-secondary/20 py-3.5 hidden md:block shadow-sm">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2.5 text-primary-foreground/90">
              <MapPin size={16} className="flex-shrink-0" />
              <Link href="https://maps.google.com/?q=PSRI+Hospital,+J+Pocket,+Sheikh+Sarai,+New+Delhi,+Delhi+110017" className="hover:underline">
                PSRI Hospital, J Pocket, Sheikh Sarai, New Delhi, Delhi 110017
              </Link>
            </div>
            <div className="flex items-center gap-2.5 text-primary-foreground/90">
              <Phone size={16} className="flex-shrink-0" />
              <Link href="tel:+91-9971145913" className="hover:underline">
                +91-9971145913
              </Link>
            </div>
            <div className="flex items-center gap-2.5 text-primary-foreground/90">
              <Mail size={16} className="flex-shrink-0" />
              <Link href="mailto:contact@drsanjaychaurey.com" className="hover:underline">
                contact@drsanjaychaurey.com
              </Link>
            </div>
          </div>
          <Button 
            size="sm" 
            onClick={openAppointment}
            className="border border-white text-white bg-transparent hover:bg-white hover:text-secondary text-sm h-8 font-semibold transition-all"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
