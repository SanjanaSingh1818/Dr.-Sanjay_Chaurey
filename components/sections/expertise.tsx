'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Users, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '35+ Years Experience',
    description: 'Decades of expertise in surgical excellence and patient care.',
  },
  {
    icon: Zap,
    title: 'Robotic Surgery Pioneer',
    description: 'Leading innovator in minimally invasive and robotic surgical techniques.',
  },
  {
    icon: Users,
    title: 'Patient-Centered Approach',
    description: 'Ethical care focused on patient wellbeing and optimal outcomes.',
  },
  {
    icon: Heart,
    title: 'High Success Rate',
    description: 'Proven track record of excellent surgical outcomes and patient satisfaction.',
  },
];

export function ExpertiseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section className="py-16 md:py-20 bg-background">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Dr. Chaurey
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Exceptional surgical expertise combined with compassionate, ethical patient care.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-6 hover:shadow-lg transition-all border-border hover:border-primary/50 hover:bg-blue-50/30">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
