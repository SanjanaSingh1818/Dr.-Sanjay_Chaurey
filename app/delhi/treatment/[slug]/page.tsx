import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumb } from '@/components/breadcrumb';
import { TreatmentContent } from '@/components/treatment-content';

export type TreatmentSlug = 
  | 'laparoscopic-surgery' 
  | 'robotic-surgery' 
  | 'hernia-treatment' 
  | 'anorectal-diseases' 
  | 'complex-fistula-treatment'
  | 'hiatal-hernia-surgery'
    'bariatric-surgery'
    'cancer-surgery';

interface TreatmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const treatmentMetadata: Record<TreatmentSlug, { title: string; description: string }> = {
  'laparoscopic-surgery': {
    title: 'Laparoscopic Surgery | Dr. Sanjay Chaurey',
    description: 'Learn about minimally invasive laparoscopic surgery techniques and benefits.'
  },
  'robotic-surgery': {
    title: 'Robotic Surgery | Dr. Sanjay Chaurey',
    description: 'Advanced robotic-assisted surgical procedures for enhanced precision.'
  },
  'hernia-treatment': {
    title: 'Hernia Treatment | Dr. Sanjay Chaurey',
    description: 'Comprehensive hernia repair solutions using the latest surgical techniques.'
  },
  'anorectal-diseases': {
    title: 'Anorectal Diseases | Dr. Sanjay Chaurey',
    description: 'Expert treatment of colorectal and anorectal conditions.'
  },
  'complex-fistula-treatment': {
    title: 'Complex Fistula Treatment | Dr. Sanjay Chaurey',
    description: 'Video-assisted treatment of complex fistulas using innovative approaches.'
  },
  'hiatal-hernia-surgery': {
    title: 'Hiatal Hernia Surgery | Dr. Sanjay Chaurey',
    description: 'Specialized surgical treatment for hiatal hernias with minimal invasiveness.'
  },
  'bariatric-surgery': {
    title: 'Bariatric Surgery | Dr. Sanjay Chaurey',
    description: 'Effective weight loss surgery options tailored to individual needs.'
  },
  'cancer-surgery': {
    title: 'Cancer Surgery | Dr. Sanjay Chaurey',
    description: 'Surgical oncology expertise for comprehensive cancer care.'
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

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      locale: 'en_IN',
    },
  };
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
