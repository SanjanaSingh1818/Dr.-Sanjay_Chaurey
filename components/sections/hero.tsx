'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppointment } from '@/contexts/appointment-context';

export function HeroSection() {
  const { openAppointment } = useAppointment();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef8ff] via-[#e1f1ff] to-[#cfe7fb]">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.9),transparent_32%),linear-gradient(120deg,#f4fbff_0%,#d9edff_52%,#c8e4f7_100%)]" />

      {/* Container */}
      <div className="relative z-10 w-full py-10 sm:py-12 lg:py-16 flex items-center md:min-h-[600px] lg:min-h-[640px]">

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-14 xl:gap-20 w-full px-4 sm:px-6 md:px-8 lg:px-12">

          {/* LEFT - TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-5 order-1"
          >
            <p className="text-[#2f68b4] font-semibold text-sm">
              Senior Consultant Surgeon • 35+ Years Experience
            </p>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] xl:text-[58px] font-bold leading-[1.08] text-[#1a2d42]">
              Advanced Laparoscopic <br />
              <span className="text-[#2f68b4]">& Robotic Surgery</span>
            </h1>

            <p className="text-[#4a5a6f] text-[15px] md:text-base leading-relaxed max-w-xl">
              Dr Sanjay Chaurey is an early adopter of minimally invasive & robotic abdominal surgery, specializing in hernia & anorectal conditions, including complex fistula treatment.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-[#2f68b4]">35+</p>
                <p className="text-sm text-gray-600 font-medium">yrs of exp</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#2f68b4]">Expert</p>
                <p className="text-sm text-gray-600 font-medium">Robotic & Laparoscopic</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 flex-wrap pt-1">
              <Button
                className="bg-[#b83f0f] hover:bg-primary text-white px-6 py-5 text-sm font-semibold rounded-full"
                onClick={openAppointment}
              >
                Book Appointment
              </Button>

              <Link href="tel:+91-9971145913">
                <Button
                  variant="outline"
                  className="px-6 py-5 rounded-full border-2 border-[#2f68b4] text-[#2f68b4] font-semibold hover:bg-secondary text-sm"
                >
                  Call: +91-9971145913
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="pt-1 space-y-2">
              <div className="flex items-start gap-3">
                <MessageCircle className="text-[#2f68b4] flex-shrink-0 mt-1" size={20} />
                <span className="text-[#4a5a6f] text-[13px]">
                  Ethical and patient-focused surgical care
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Users className="text-[#2f68b4] flex-shrink-0 mt-1" size={20} />
                <span className="text-[#4a5a6f] text-[13px]">
                  Clear guidance for long-term patient confidence
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Stethoscope className="text-[#2f68b4] flex-shrink-0 mt-1" size={20} />
                <span className="text-[#4a5a6f] text-[13px]">
                  Specialized care in hernia & anorectal conditions
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - DOCTOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-2 flex w-full justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[360px] xl:max-w-[460px]">
              <div className="absolute -inset-4 rounded-[2.25rem] bg-white/45 shadow-[0_30px_90px_rgba(39,103,174,0.18)]" />
              <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl">
                <Image
                  src="/images/hero-doctor.jpg"
                  alt="Dr. Sanjay Chaurey in consultation room"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 560px"
                  className="object-cover object-[52%_40%]"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 h-10 w-[78%] -translate-x-1/2 rounded-full bg-[#2767ae]/20 blur-xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
