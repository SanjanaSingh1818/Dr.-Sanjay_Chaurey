'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle, Calendar, Stethoscope, ActivitySquare } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Appointment',
    description: 'Schedule a consultation at your convenience through our online system.',
    number: '01',
  },
  {
    icon: Stethoscope,
    title: 'Initial Consultation',
    description: 'Discuss your condition and medical history with Dr. Chaurey.',
    number: '02',
  },
  {
    icon: ActivitySquare,
    title: 'Treatment Plan',
    description: 'Receive a personalized surgical treatment plan tailored to your needs.',
    number: '03',
  },
  {
    icon: CheckCircle,
    title: 'Recovery & Follow-up',
    description: 'Comprehensive post-operative care and regular follow-up appointments.',
    number: '04',
  },
];

export function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 md:py-20 bg-blue-50/50">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A transparent, step-by-step process from consultation to recovery.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 left-[60%] w-[calc(100%+24px)] h-1 bg-gradient-to-r from-primary to-accent opacity-20 -z-10" />
                )}
                
                <Card className="h-full bg-card hover:shadow-lg transition-all border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
