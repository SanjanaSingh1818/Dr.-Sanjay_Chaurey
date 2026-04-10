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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f0ddd8] via-[#e8d4cc] to-[#c9a882] max-h-[calc(100vh-132px)]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f0ddd8] to-[#c9a882]" />

      {/* Container */}
      <div className="relative z-10 w-full py-14 h-full flex items-center">

        <div className="grid md:grid-cols-[1.3fr_0.9fr_1.1fr] items-end gap-2 lg:gap-4 w-full px-6 md:px-8 lg:px-12 h-full">

          {/* LEFT - TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 pr-4"
          >
            <p className="text-[#2f68b4] font-semibold text-sm">
              Senior Consultant Surgeon • 35+ Years Experience
            </p>

            <h1 className="text-[32px] md:text-[42px] font-bold leading-tight text-[#1a2d42]">
              Advanced Laparoscopic <br />
              <span className="text-[#2f68b4]">& Robotic Surgery</span>
            </h1>

            <p className="text-[#4a5a6f] text-[14px] leading-relaxed">
            Dr Sanjay Chaurey is an early adopter of minimally invasive & robotic abdominal surgery, specializing in hernia & anorectal conditions, including complex fistula treatment.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-[#2f68b4]">35+</p>
                <p className="text-sm text-gray-600 font-medium">yrs of exp</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#2f68b4]">Expert</p>
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
            <div className="pt-1 space-y-3">
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

          {/* CENTER - DOCTOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center items-end w-full -mb-12"
          >
            <Image
              src="/images/dr.png"
              alt="Doctor"
              width={400}
              height={520}
              className="w-full h-auto object-contain max-w-sm"
            />
          </motion.div>

          {/* RIGHT - APPOINTMENT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex self-start pr-6 md:pr-8 lg:pr-12 w-full"
          >
            <div className="w-full bg-white rounded-2xl shadow-xl p-7 border border-gray-200">
              <h3 className="text-[20px] font-bold text-[#1a2d42] mb-5">
                Book Consultation
              </h3>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Patient Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] text-gray-700 focus:outline-none focus:border-[#2f68b4] placeholder-gray-400"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] text-gray-700 focus:outline-none focus:border-[#2f68b4] placeholder-gray-400"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    className="px-4 py-3 border border-gray-300 rounded-lg text-[14px] text-gray-700 focus:outline-none focus:border-[#2f68b4]"
                  />
                  <input
                    type="time"
                    className="px-4 py-3 border border-gray-300 rounded-lg text-[14px] text-gray-700 focus:outline-none focus:border-[#2f68b4]"
                  />
                </div>

                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[14px] text-gray-700 focus:outline-none focus:border-[#2f68b4] bg-white">
                  <option value="">Select Treatment</option>
                  <option value="consultation">Consultation</option>
                  <option value="surgery">Surgery</option>
                  <option value="followup">Follow-up</option>
                </select>

                <button className="w-full bg-[#2f68b4] hover:bg-[#254e8f] text-white py-3 font-semibold rounded-lg transition-colors text-[15px] mt-1">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}