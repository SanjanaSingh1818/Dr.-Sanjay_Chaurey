'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AppointmentForm } from '@/components/appointment-form';

export function CTASection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Begin Your Journey to Better Health?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Contact Dr. Sanjay Chaurey today to schedule a consultation and discuss the best treatment options for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => setIsDialogOpen(true)}
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
            >
              Schedule Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Call Now
            </Button>
          </div>

          <p className="text-sm opacity-75 pt-4">
            Available Monday - Saturday, 9:00 AM - 6:00 PM
          </p>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule Your Appointment</DialogTitle>
          </DialogHeader>
          <AppointmentForm
            onSuccess={() => setIsDialogOpen(false)}
            variant="modal"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
