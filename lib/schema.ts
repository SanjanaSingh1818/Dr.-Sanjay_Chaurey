export const doctorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Doctor',
  name: 'Dr. Sanjay Chaurey',
  description: 'Senior Consultant Surgeon with 35+ years of experience',
  url: 'https://drchaurey.com',
  image: 'https://drchaurey.com/dr-chaurey-photo.jpg',
  telephone: '+91-11-XXXX-XXXX',
  email: 'contact@drchaurey.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Street Address]',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    postalCode: '[PIN Code]',
    addressCountry: 'IN',
  },
  medicalSpecialty: 'Surgery',
  areaServed: 'IN',
  award: [
    'Pioneer in Minimally Invasive Surgery',
    'Expert in Robotic Surgery',
  ],
  knowsAbout: [
    'Laparoscopic Surgery',
    'Robotic Surgery',
    'Hernia Repair',
    'Colorectal Surgery',
  ],
};

export const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Sanjay Chaurey - Surgical Clinic',
  image: 'https://drchaurey.com/clinic-photo.jpg',
  description: 'Expert surgical care with 35+ years of experience in minimally invasive and robotic surgery',
  url: 'https://drchaurey.com',
  telephone: '+91-11-XXXX-XXXX',
  email: 'contact@drchaurey.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Street Address]',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    postalCode: '[PIN Code]',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  medicalSpecialty: 'Surgery',
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dr. Sanjay Chaurey - Surgical Services',
  url: 'https://drchaurey.com',
  logo: 'https://drchaurey.com/logo.png',
  sameAs: [
    'https://www.facebook.com/drchaurey',
    'https://www.twitter.com/drchaurey',
    'https://www.linkedin.com/in/drchaurey',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-11-XXXX-XXXX',
    email: 'contact@drchaurey.com',
  },
};
