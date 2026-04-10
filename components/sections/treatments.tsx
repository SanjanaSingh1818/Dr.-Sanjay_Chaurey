'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const treatments = [
  {
    slug: 'laparoscopic-surgery',
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive surgical techniques for faster recovery',
    image: 'https://www.rghospitals.com/assets/admin/images/blog/1740477911_771499b88eb7789b8dc3.jpg',
  },
  {
    slug: 'robotic-surgery',
    title: 'Robotic Surgery',
    description: 'Advanced robotic-assisted surgical procedures',
    image: 'https://www.gastrodelhi.com/blog/wp-content/uploads/2024/02/robotic-surgery.jpg',
  },
  {
    slug: 'hernia-treatment',
    title: 'Hernia Treatment',
    description: 'Expert treatment for various types of hernias',
    image: 'https://drabhijitgotkhinde.com/wp-content/uploads/2020/11/herniasurgerylaparo.jpg',
  },
  {
    slug: 'anorectal-diseases',
    title: 'Anorectal Diseases',
    description: 'Specialized care for colorectal conditions',
    image: 'https://5.imimg.com/data5/NC/FB/GLADMIN-45979224/anatomy-of-common-anorectal-disorders.png',
  },
  {
    slug: 'complex-fistula-treatment',
    title: 'Complex Fistula Treatment',
    description: 'Advanced treatment options for complex fistulas',
    image: 'https://www.drsrivatsan.com/wp-content/uploads/2025/05/Complex-Fistula-What-You-Need-to-Know.jpg',
  },
  {
    slug: 'hiatal-hernia-surgery',
    title: 'Hiatal Hernia Surgery',
    description: 'Specialized surgical repair of hiatal hernias',
    image: 'https://medlineplus.gov/ency/images/ency/fullsize/7129.jpg',
  },
  {
    slug: 'bariatric-surgery',
    title: 'Bariatric Surgery',
    description: 'Weight loss surgery options',
    image: 'https://livlifehospitals.com/wp-content/uploads/2025/02/Bariatric-Surgery-1.webp',
  },
  {
    slug: 'cancer-surgery',
    title: 'Cancer Surgery',
    description: 'Surgical oncology expertise',
    image: 'https://www.universalhospitalsurat.com/wp-content/uploads/2024/01/Colon-Cancer-Surgery.jpg',
  },
];

export function TreatmentsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Our Treatments
          </h2>
          <p className="text-sm text-foreground/70 max-w-lg mx-auto">
            Advanced surgical expertise across all major procedures
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {treatments.map((treatment, index) => (
<motion.div key={treatment.slug} variants={itemVariants}>
  <Card className="h-full overflow-hidden border-border hover:border-primary/50 hover:shadow-lg transition-all group p-0">

    {/* IMAGE */}
    <div className="relative h-36 w-full overflow-hidden">
      <Image
        src={treatment.image}
        alt={treatment.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-2 right-2">
        <Link href={`/delhi/treatment/${treatment.slug}`}>
          <Button
            size="sm"
            className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 h-7 w-7"
          >
            <ArrowRight size={12} />
          </Button>
        </Link>
      </div>
    </div>

    {/* CONTENT */}
    <CardContent className=" pb-3 px-3">
      <h3 className="text-sm font-bold text-foreground mb-0.5">
        {treatment.title}
      </h3>
      <p className="text-xs text-foreground/70 leading-snug">
        {treatment.description}
      </p>
    </CardContent>

  </Card>
</motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
