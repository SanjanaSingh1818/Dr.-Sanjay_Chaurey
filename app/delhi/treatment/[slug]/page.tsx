import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { TreatmentContent } from '@/components/treatment-content';
import { pageMetadata } from '@/lib/seo';

export type TreatmentSlug = 
  | 'laparoscopic-surgery' 
  | 'robotic-surgery' 
  | 'hernia-treatment' 
  | 'anorectal-diseases' 
  | 'complex-fistula-treatment'
  | 'hiatal-hernia-surgery'
  | 'bariatric-surgery'
  | 'cancer-surgery';

interface TreatmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const treatmentMetadata: Record<TreatmentSlug, { title: string; description: string }> = {
  'laparoscopic-surgery': {
    title: 'Laparoscopic Surgery in Delhi | Dr. Sanjay Chaurey',
    description: 'Consult Dr. Sanjay Chaurey for minimally invasive laparoscopic surgery in Delhi, focused on smaller incisions, faster recovery and expert surgical care.'
  },
  'robotic-surgery': {
    title: 'Robotic Surgery in Delhi | Dr. Sanjay Chaurey',
    description: 'Advanced robotic-assisted surgery in Delhi by Dr. Sanjay Chaurey, Senior Consultant Surgeon with 35+ years of surgical experience.'
  },
  'hernia-treatment': {
    title: 'Hernia Treatment in Delhi | Dr. Sanjay Chaurey',
    description: 'Comprehensive hernia treatment and hernia repair surgery in Delhi using modern laparoscopic and minimally invasive techniques.'
  },
  'anorectal-diseases': {
    title: 'Anorectal Disease Treatment in Delhi | Dr. Sanjay Chaurey',
    description: 'Expert treatment for anorectal diseases in Delhi, including piles, fissure, fistula and related surgical conditions.'
  },
  'complex-fistula-treatment': {
    title: 'Complex Fistula Treatment in Delhi | Dr. Sanjay Chaurey',
    description: 'Video-assisted complex fistula treatment in Delhi by Dr. Sanjay Chaurey with a patient-focused minimally invasive approach.'
  },
  'hiatal-hernia-surgery': {
    title: 'Hiatal Hernia Surgery in Delhi | Dr. Sanjay Chaurey',
    description: 'Specialized hiatal hernia surgery in Delhi with minimally invasive treatment planning by Dr. Sanjay Chaurey.'
  },
  'bariatric-surgery': {
    title: 'Bariatric Surgery in Delhi | Dr. Sanjay Chaurey',
    description: 'Bariatric surgery consultation in Delhi with individualized surgical planning and experienced minimally invasive care.'
  },
  'cancer-surgery': {
    title: 'Cancer Surgery in Delhi | Dr. Sanjay Chaurey',
    description: 'Cancer surgery consultation in Delhi with experienced surgical planning and compassionate patient-centered care.'
  },
  
};

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = treatmentMetadata[slug as TreatmentSlug];
  
  if (!metadata) {
    return { title: 'Treatment Not Found' };
  }

  return pageMetadata({
    title: metadata.title,
    description: metadata.description,
    path: `/delhi/treatment/${slug}`,
  });
}

export async function generateStaticParams() {
  return [
    { slug: 'laparoscopic-surgery' },
    { slug: 'robotic-surgery' },
    { slug: 'hernia-treatment' },
    { slug: 'anorectal-diseases' },
    { slug: 'complex-fistula-treatment' },
    { slug: 'hiatal-hernia-surgery' },
    { slug: 'bariatric-surgery' },
    { slug: 'cancer-surgery' },
  ];
}

export default async function TreatmentPage({
  params,
}: TreatmentPageProps) {
  const { slug } = await params;
  const treatmentSlug = slug as TreatmentSlug;
  
  if (!treatmentMetadata[treatmentSlug]) {
    notFound();
  }

  const treatmentName = {
    'laparoscopic-surgery': 'Laparoscopic Surgery',
    'robotic-surgery': 'Robotic Surgery',
    'hernia-treatment': 'Hernia Treatment',
    'anorectal-diseases': 'Anorectal Diseases',
    'complex-fistula-treatment': 'Complex Fistula Treatment',
    'hiatal-hernia-surgery': 'Hiatal Hernia Surgery',
    'bariatric-surgery': 'Bariatric Surgery',
    'cancer-surgery': 'Cancer Surgery',
  }[treatmentSlug];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Delhi' },
          { label: 'Treatment' },
          { label: treatmentName }
        ]}
      />
      <main className="flex-1">
        <TreatmentContent slug={treatmentSlug} />
      </main>
      <Footer />
    </div>
  );
}
