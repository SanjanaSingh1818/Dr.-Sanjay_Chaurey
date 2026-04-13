'use client';

import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-primary text-primary-foreground py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Dr. Sanjay Chaurey
            </h1>
            <p className="text-lg opacity-90">
              35+ Years of Excellence in Surgical Care
            </p>
          </div>
        </section>

        {/* ABOUT BLOCK */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/dr3.png"
                  alt="Dr Sanjay Chaurey"
                  width={500}
                  height={650}
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-4 bg-white shadow-md rounded-lg px-4 py-2 text-sm font-semibold">
                35+ Years Experience
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Legacy of Surgical Excellence
              </h2>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Dr Sanjay Chaurey is a Senior Consultant Surgeon with over 35 years of experience. 
                He has expertise in laparoscopic (keyhole) and robotic surgery and has been among 
                the early surgeons in the country trained in minimally invasive abdominal procedures.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-4">
                He has a special interest in treating hernias and anorectal diseases, including 
                advanced video-assisted treatment of complex fistulas with consistent success.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                A practical and ethical approach to surgical problems is his forte, with a strong 
                belief that patient confidence and satisfaction must be long-term outcomes built 
                through understanding and trust.
              </p>
            </div>

          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Areas of Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Laparoscopic Surgery</h3>
                <p className="text-foreground/80">Minimally invasive procedures ensuring faster recovery.</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Robotic Surgery</h3>
                <p className="text-foreground/80">Precision-driven robotic techniques.</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Hernia Treatment</h3>
                <p className="text-foreground/80">Comprehensive care for all hernia types.</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Anorectal & Fistula Care</h3>
                <p className="text-foreground/80">Advanced treatment for complex fistulas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY (RESTORED PROPERLY) */}
        <section className="py-14 md:py-20 bg-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <h2 className="text-3xl font-bold mb-6">
              Philosophy & Approach
            </h2>

            <blockquote className="text-lg italic border-l-4 border-primary pl-6 mb-4 text-foreground/80">
              "A practical and ethical approach to a surgical problem is my forte. 
              Patient satisfaction and confidence must be long-term outcomes."
            </blockquote>

            <p className="text-foreground/80 leading-relaxed mb-3">
              Dr Chaurey believes that successful treatment is not limited to surgical outcomes, 
              but also includes the patient’s understanding of their condition and the treatment offered.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              This approach ensures trust, clarity, and long-term confidence in the care provided.
            </p>

          </div>
        </section>

        {/* QUALIFICATIONS (ADDED BACK) */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Qualifications & Training
            </h2>

            <ul className="space-y-4 text-foreground/80">
              <li>• Senior Consultant Surgeon with over 35 years of experience</li>
              <li>• Trained in minimally invasive and robotic surgical techniques</li>
              <li>• Among early adopters of robotic abdominal surgery in India</li>
              <li>• Extensive experience in hernia and anorectal disease management</li>
              <li>• Committed to ethical practice and patient-centered care</li>
            </ul>

          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 text-center">
            
            <div>
              <p className="text-4xl font-bold text-primary mb-2">35+</p>
              <p className="text-foreground/80">Years Experience</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">Early</p>
              <p className="text-foreground/80">Robotic Surgery Adopter</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">Expert</p>
              <p className="text-foreground/80">Hernia & Fistula Care</p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}