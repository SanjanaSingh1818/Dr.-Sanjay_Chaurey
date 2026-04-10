'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AppointmentForm } from '@/components/appointment-form';
import { useAppointment } from '@/contexts/appointment-context';
import { treatments } from '@/lib/treatments-data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const { isOpen: isAppointmentOpen, openAppointment, closeAppointment } = useAppointment();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-16">
          {/* Logo - Home Link */}
          <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Dr. Sanjay Chaurey
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>

            {/* Treatments Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Treatments
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {treatments.map((treatment) => (
                  <Link
                    key={treatment.slug}
                    href={`/delhi/treatment/${treatment.slug}`}
                    className="block px-4 py-2 text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {treatment.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/faqs" className="text-foreground hover:text-primary transition-colors">
              FAQs
            </Link>
            <Link href="/testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              About
            </Link>

            {/* Mobile Treatments */}
            <button
              onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
              className="w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded flex items-center justify-between"
            >
              Treatments
              <ChevronDown size={16} className={`transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
            </button>
            {isTreatmentsOpen && (
              <div className="pl-4 space-y-1">
                {treatments.map((treatment) => (
                  <Link
                    key={treatment.slug}
                    href={`/delhi/treatment/${treatment.slug}`}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary rounded"
                  >
                    {treatment.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/faqs" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              FAQs
            </Link>
            <Link href="/testimonials" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Testimonials
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Contact
            </Link>
          </div>
        )}

        {/* Appointment Dialog */}
        <Dialog open={isAppointmentOpen} onOpenChange={closeAppointment}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Book Your Appointment</DialogTitle>
              <DialogDescription>
                Schedule a consultation with Dr. Sanjay Chaurey. We'll contact you within 24 hours to confirm.
              </DialogDescription>
            </DialogHeader>
            <AppointmentForm
              onSuccess={closeAppointment}
              variant="modal"
            />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}
