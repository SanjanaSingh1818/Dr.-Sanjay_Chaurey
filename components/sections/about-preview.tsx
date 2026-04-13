"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutDoctorSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="w-full px-6 md:px-8 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/dr2.png" // 👉 replace with actual image
                alt="Dr Sanjay Chaurey"
                width={600}
                height={700}
                className="w-full h-[420px] md:h-[520px] object-fit group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-xl px-4 py-2">
              <p className="text-sm font-semibold text-gray-800">
                35+ Years Experience
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              About <span className="font-serif italic">Dr. Sanjay Chaurey</span>
            </h2>

            <p className="mt-6 text-foreground/80 leading-relaxed text-[15px] md:text-base">
              Dr Sanjay Chaurey is a Senior Consultant Surgeon with over 35 years
              of experience. He specializes in Laparoscopic (Keyhole) and Robotic
              surgery and was among the early surgeons in the country trained in
              minimally invasive and robotic abdominal procedures.
            </p>

            <p className="mt-4 text-foreground/80 leading-relaxed text-[15px] md:text-base">
              He has a special interest in treating hernias and anorectal diseases,
              including advanced video-assisted treatment of complex fistulas with
              consistent success.
            </p>

            <p className="mt-4 text-foreground/80 leading-relaxed text-[15px] md:text-base">
              Known for his practical and ethical approach, Dr Chaurey believes that
              lasting patient satisfaction comes from clear understanding, trust,
              and confidence in the treatment process.
            </p>

            <p className="mt-4 text-foreground/80 leading-relaxed text-[15px] md:text-base">
              A compassionate and upright surgical professional, he focuses not only
              on outcomes but on the overall patient experience and long-term well-being.
            </p>

            {/* Optional highlights */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full">
                Laparoscopic Surgery
              </span>
              <span className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full">
                Robotic Surgery
              </span>
              <span className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full">
                Hernia Specialist
              </span>
              <span className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full">
                Anorectal Expert
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}