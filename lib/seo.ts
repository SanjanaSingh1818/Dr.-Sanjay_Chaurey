import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Dr. Sanjay Chaurey',
  title: 'Dr. Sanjay Chaurey | Senior Consultant Surgeon in Delhi',
  description:
    'Consult Dr. Sanjay Chaurey, Senior Consultant Surgeon in Delhi with 35+ years of experience in laparoscopic surgery, robotic surgery, hernia repair, anorectal disease and complex fistula treatment.',
  url: 'https://drsanjaychaurey.in',
  phone: '+91-9971145913',
  email: 'contact@drsanjaychaurey.com',
  address: 'PSRI Hospital, J Pocket, Sheikh Sarai, New Delhi, Delhi 110017',
  ogImage: '/images/og-dr-sanjay-chaurey.jpg',
};

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function pageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImage);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_IN',
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1200,
          height: 630,
          alt: 'Dr. Sanjay Chaurey, Senior Consultant Surgeon in Delhi',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
