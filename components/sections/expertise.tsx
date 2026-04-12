'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Users, Zap, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

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
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-background">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Why Choose Dr. Chaurey
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Exceptional surgical expertise combined with compassionate, ethical patient care.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="h-full p-5 lg:p-6 hover:shadow-lg transition-all border-border hover:border-primary/50 hover:bg-blue-50/30"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-primary/10 p-3 lg:p-4 rounded-lg">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-foreground/70">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <CarouselItem key={index} className="pl-2 basis-[85%]">
                    <Card className="p-5 h-full shadow-sm border-border">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="text-primary" size={22} />
                        </div>
                        <h3 className="text-base font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-foreground/70">
                          {feature.description}
                        </p>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
}