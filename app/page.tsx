import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { ExpertiseSection } from '@/components/sections/expertise';
import { TreatmentsSection } from '@/components/sections/treatments';
import { AboutDoctorSection } from '@/components/sections/about-preview';
import { HospitalSection } from '@/components/sections/testimonials';
import {HomePatientReviews} from '@/components/sections/reviews';

export const metadata: Metadata = {
  title: 'Dr. Sanjay Chaurey',
  description: 'Dr. Sanjay Chaurey - Senior Consultant Surgeon with 35+ years of experience in minimally invasive and robotic surgery.',
  openGraph: {
    title: 'Dr. Sanjay Chaurey | Senior Consultant Surgeon',
    description: 'Expert surgical care with 35+ years of experience',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ExpertiseSection />
        <TreatmentsSection />
        <AboutDoctorSection />
         <HospitalSection />
        <HomePatientReviews />
       
      </main>
      <Footer />
    </div>
  );
}
