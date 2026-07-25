import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { ExpertiseSection } from '@/components/sections/expertise';
import { TreatmentsSection } from '@/components/sections/treatments';
import { AboutDoctorSection } from '@/components/sections/about-preview';
import { HospitalSection } from '@/components/sections/testimonials';
import {HomePatientReviews} from '@/components/sections/reviews';
import { pageMetadata, siteConfig } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
});

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
