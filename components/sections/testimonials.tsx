"use client";

import Link from "next/link";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=PSRI+Hospital+Sheikh+Sarai+New+Delhi";

const PHONE = "+919971145913";

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#9a3412]">
    <path d="M12 2.5C8.42 2.5 5.5 5.42 5.5 9c0 4.65 5.78 12.01 6.03 12.32.24.3.7.3.94 0 .25-.31 6.03-7.67 6.03-12.32 0-3.58-2.92-6.5-6.5-6.5Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#9a3412]">
    <path d="M6.6 10.8c1.7 3.3 3.3 4.9 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3c1 .3 2.2.5 3.4.5a1.2 1.2 0 0 1 1.2 1.2v3.4a1.2 1.2 0 0 1-1.2 1.2C9.5 21.2 2.8 14.5 2.8 6.2A1.2 1.2 0 0 1 4 5h3.4A1.2 1.2 0 0 1 8.6 6.2Z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4">
    <circle cx="12" cy="12" r="9" stroke="#065f46" strokeWidth="2" fill="none"/>
    <path d="M12 7v5l3 2" stroke="#065f46" strokeWidth="2"/>
  </svg>
);

export function HospitalSection() {
  return (
    <section className="bg-[#e6c0b1] py-20 relative">

      {/* subtle overlap effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[40px]" />

      <div className="mx-auto max-w-6xl px-6 md:px-10 relative">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -top-5 -left-5 w-full h-full bg-white/50 rounded-3xl blur-sm"></div>

            <img
              src="/images/hospital.webp"
              alt="PSRI Hospital"
              className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f] leading-tight">
              Dr. Sanjay Chaurey
            </h2>

            <p className="text-[#5b3f3f] font-medium text-lg">
              Surgeon – PSRI Hospital, New Delhi
            </p>

            {/* CLICKABLE ADDRESS */}
            <Link
              href={MAP_URL}
              target="_blank"
              className="flex items-start gap-3 group"
            >
              <LocationIcon />
              <p className="text-[#4b2e2e] text-sm group-hover:underline">
                PSRI Hospital, J Pocket, Sheikh Sarai, New Delhi, Delhi 110017
              </p>
            </Link>

            {/* CLICKABLE PHONE */}
            <Link
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 group"
            >
              <PhoneIcon />
              <p className="text-[#4b2e2e] text-sm font-medium group-hover:underline">
                +91 99711 45913
              </p>
            </Link>

            {/* WORKING HOURS */}
            <div className="bg-white/60 backdrop-blur rounded-xl p-4 space-y-2 shadow-sm">
              <p className="flex items-center gap-2 font-semibold text-[#3b2f2f]">
                <ClockIcon /> Working Hours
              </p>

              <p className="text-sm text-[#4b2e2e]">
                Monday, Wednesday, Thursday, Friday: 10 am – 5 pm
              </p>
              <p className="text-sm text-[#4b2e2e]">
                Tuesday, Saturday: 10:30 am – 5 pm
              </p>
              <p className="text-sm text-[#4b2e2e]">
                Sunday: Closed
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">

              <Link
                href={MAP_URL}
                target="_blank"
                className="px-6 py-2.5 rounded-lg border border-[#7c2d12] text-[#7c2d12] font-semibold hover:bg-[#fef3f2] transition"
              >
                Get Directions
              </Link>

              <Link
                href={`tel:${PHONE}`}
                className="px-6 py-2.5 rounded-lg bg-[#7c2d12] text-white font-semibold hover:bg-[#5b1f0a] transition shadow-md"
              >
                Call Now
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}