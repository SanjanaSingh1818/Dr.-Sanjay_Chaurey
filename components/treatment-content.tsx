'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AppointmentForm } from '@/components/appointment-form';
import { CheckCircle, AlertCircle } from 'lucide-react';

type TreatmentSlug = 
  | 'laparoscopic-surgery' 
  | 'robotic-surgery' 
  | 'hernia-treatment' 
  | 'anorectal-diseases' 
  | 'complex-fistula-treatment'
  | 'hiatal-hernia-surgery'
  | 'bariatric-surgery'
  | 'cancer-surgery';

interface TreatmentInfo {
  title: string;
  overview: string;
  symptoms: string[];
  procedure: string;
  benefits: string[];
  recovery: string;
}

const treatmentData: Record<TreatmentSlug, TreatmentInfo> = {
  'laparoscopic-surgery': {
    title: 'Laparoscopic (Keyhole) Surgery',
    overview: 'Laparoscopic surgery, also known as minimally invasive or keyhole surgery, uses small incisions and specialized instruments with a camera to perform surgical procedures with minimal tissue trauma.',
    symptoms: [
      'Abdominal pain or discomfort',
      'Digestive issues',
      'Need for exploratory surgery',
      'Gallbladder disease',
      'Hernia requiring surgical repair'
    ],
    procedure: 'The procedure involves making 1-3 small incisions, inserting a laparoscope (camera), and using specialized surgical instruments to complete the operation while viewing on a monitor. This approach allows for precise visualization and minimal tissue disruption.',
    benefits: [
      'Smaller incisions (5-10mm)',
      'Reduced pain and scarring',
      'Faster recovery time',
      'Less infection risk',
      'Earlier return to normal activities',
      'Shorter hospital stay'
    ],
    recovery: 'Recovery typically takes 1-2 weeks, with most patients returning to normal activities within 3-4 weeks. Pain is minimal due to the small incisions, and patients can often go home the same day or after an overnight stay.'
  },
  'robotic-surgery': {
    title: 'Robotic-Assisted Surgery',
    overview: 'Robotic surgery combines the precision of computer technology with the skill of the surgeon, providing enhanced dexterity, visualization, and control during complex surgical procedures.',
    symptoms: [
      'Complex surgical conditions',
      'Difficult anatomical situations',
      'Conditions benefiting from enhanced precision',
      'Multiple organ involvement'
    ],
    procedure: 'The surgeon controls a robotic system from a console, with the robot&apos;s arms precisely executing movements. The system filters out hand tremors and allows for enhanced precision, making it ideal for intricate surgeries.',
    benefits: [
      'Greater surgical precision',
      'Enhanced 3D visualization',
      'Reduced blood loss',
      'Smaller incisions possible',
      'Faster recovery compared to open surgery',
      'Lower infection rates',
      'Better outcomes in complex cases'
    ],
    recovery: 'Recovery is typically faster than traditional open surgery. Most patients experience minimal pain, shorter hospital stays (often same-day discharge), and can return to normal activities within 2-4 weeks.'
  },
  'hernia-treatment': {
    title: 'Hernia Treatment',
    overview: 'A hernia occurs when an organ pushes through a weak spot in surrounding muscle tissue. Dr. Chaurey offers comprehensive surgical and non-surgical treatment options for all types of hernias.',
    symptoms: [
      'Bulge or lump in the abdomen or groin',
      'Discomfort or pain, especially when lifting',
      'Pressure or heaviness sensation',
      'Worsening of symptoms over time'
    ],
    procedure: 'Treatment depends on hernia type and severity. Options include laparoscopic repair, open repair, or robotic-assisted repair. The weakened area is reinforced with mesh or tissue to prevent recurrence.',
    benefits: [
      'Prevents hernia complications',
      'Restores abdominal wall strength',
      'Minimizes pain and discomfort',
      'Low recurrence rate with modern techniques',
      'Improved quality of life',
      'Minimally invasive options available'
    ],
    recovery: 'Recovery varies by technique. Laparoscopic repair typically involves 1-2 weeks of limited activity and 4-6 weeks for full recovery. Patients usually experience minimal pain and can return to work within 2-3 weeks.'
  },
  'anorectal-diseases': {
    title: 'Anorectal Diseases Treatment',
    overview: 'Anorectal diseases include conditions affecting the rectum, anus, and surrounding areas. Dr. Chaurey provides comprehensive diagnosis and treatment with compassionate care and latest techniques.',
    symptoms: [
      'Bleeding during bowel movements',
      'Pain during or after defecation',
      'Itching or irritation',
      'Lump or mass in the area',
      'Constipation or diarrhea',
      'Discharge'
    ],
    procedure: 'Treatment depends on diagnosis and may include minimally invasive procedures, medical management, or surgical intervention. Advanced techniques minimize pain and preserve normal function.',
    benefits: [
      'Accurate diagnosis with advanced imaging',
      'Minimal invasive treatment options',
      'Pain relief and symptom resolution',
      'Preserves bowel function',
      'Improved quality of life',
      'Expert colorectal care'
    ],
    recovery: 'Recovery depends on treatment type. Most procedures involve minimal recovery time, with patients returning to normal activities within 1-2 weeks. Pain management is emphasized for comfort.'
  },
  'complex-fistula-treatment': {
    title: 'Complex Fistula Treatment',
    overview: 'Anal fistulas are abnormal connections between the anal canal and skin. Dr. Chaurey specializes in video-assisted techniques for complex fistulas that require specialized expertise.',
    symptoms: [
      'Pain and swelling near the anus',
      'Drainage of pus or blood',
      'Itching and discomfort',
      'Recurrent abscess formation',
      'Difficulty with hygiene'
    ],
    procedure: 'Video-assisted anal fistula treatment (VAAFT) uses a camera inserted into the fistula tract to visualize and treat it from inside, preserving the sphincter muscle and reducing recurrence.',
    benefits: [
      'Sphincter preservation',
      'Lower recurrence rates',
      'Minimal pain post-operation',
      'Faster healing',
      'Reduced incontinence risk',
      'Superior outcomes for complex cases',
      'Advanced video-guided precision'
    ],
    recovery: 'Recovery is rapid with minimal post-operative pain. Patients can return to normal activities within 1-2 weeks. Healing continues over several weeks with excellent functional outcomes.'
  },
  'hiatal-hernia-surgery': {
  title: 'Hiatal Hernia Surgery',
  overview: 'Hiatal hernia occurs when a portion of the stomach pushes through the diaphragm into the chest cavity. Surgical treatment is recommended when symptoms are severe or not controlled with medication.',
  symptoms: [
    'Persistent acid reflux or heartburn',
    'Difficulty swallowing',
    'Chest discomfort or pain',
    'Regurgitation of food or acid',
    'Chronic cough or throat irritation'
  ],
  procedure: 'The surgery is typically performed laparoscopically, where the stomach is repositioned into the abdomen and the diaphragm opening is tightened. In some cases, a fundoplication is performed to prevent acid reflux.',
  benefits: [
    'Relief from chronic acid reflux',
    'Improved swallowing function',
    'Minimally invasive approach',
    'Reduced dependency on medication',
    'Faster recovery with less discomfort'
  ],
  recovery: 'Most patients recover within 2-3 weeks, with gradual return to normal diet and activities. A soft diet is recommended initially, and full recovery is typically achieved within 4-6 weeks.'
},
'bariatric-surgery': {
  title: 'Bariatric (Weight Loss) Surgery',
  overview: 'Bariatric surgery is performed to help individuals with severe obesity achieve significant and sustained weight loss, improving overall health and reducing obesity-related conditions.',
  symptoms: [
    'Severe obesity (BMI > 35 or 40)',
    'Type 2 diabetes',
    'High blood pressure',
    'Sleep apnea',
    'Joint pain due to excess weight'
  ],
  procedure: 'Common bariatric procedures include gastric bypass and sleeve gastrectomy, performed laparoscopically. These procedures reduce stomach size and/or alter digestion to limit food intake and absorption.',
  benefits: [
    'Significant long-term weight loss',
    'Improvement in diabetes and hypertension',
    'Better mobility and quality of life',
    'Reduced risk of heart disease',
    'Minimally invasive techniques available'
  ],
  recovery: 'Recovery usually takes 2-4 weeks, with a structured diet plan starting from liquids to solid foods. Patients require long-term lifestyle changes and regular follow-up for best outcomes.'
},
'cancer-surgery': {
  title: 'Cancer Surgery',
  overview: 'Cancer surgery involves the removal of tumors and affected tissues to treat or manage cancer. It plays a key role in diagnosis, staging, and treatment of various cancers.',
  symptoms: [
    'Unexplained weight loss',
    'Persistent pain or discomfort',
    'Lumps or abnormal growths',
    'Changes in bowel or bladder habits',
    'Unusual bleeding or discharge'
  ],
  procedure: 'Depending on the type and stage of cancer, surgery may involve removing the tumor, surrounding tissues, and sometimes nearby lymph nodes. Minimally invasive or robotic techniques may be used when appropriate.',
  benefits: [
    'Effective removal of cancerous tissue',
    'Helps in accurate diagnosis and staging',
    'Can improve survival outcomes',
    'Minimally invasive options available',
    'Can be combined with other treatments'
  ],
  recovery: 'Recovery varies depending on the type and extent of surgery, ranging from a few weeks to several months. Post-operative care may include follow-ups, medications, and additional therapies if required.'
}
};

interface TreatmentContentProps {
  slug: TreatmentSlug;
}

export function TreatmentContent({ slug }: TreatmentContentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const treatment = treatmentData[slug];

  if (!treatment) {
    return <div>Treatment not found</div>;
  }

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
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{treatment.title}</h1>
            <p className="text-lg opacity-90">{treatment.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Overview */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{treatment.overview}</p>
            </motion.div>

            {/* Symptoms */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Symptoms & Indications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {treatment.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground/80">{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Procedure */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Procedure</h2>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <p className="text-foreground/80 leading-relaxed">{treatment.procedure}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {treatment.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recovery */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Recovery & Aftercare</h2>
              <Card className="bg-secondary/30 border-border">
                <CardContent className="pt-6">
                  <p className="text-foreground/80 leading-relaxed">{treatment.recovery}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="bg-accent/10 rounded-lg p-8 text-center border-2 border-accent/30"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Schedule Your Consultation?</h3>
              <p className="text-foreground/70 mb-6">
                Contact Dr. Sanjay Chaurey to discuss your treatment options and take the first step toward better health.
              </p>
              <Button
                size="lg"
                onClick={() => setIsDialogOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book Appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule Your Appointment</DialogTitle>
            <DialogDescription>
              Get in touch with Dr. Sanjay Chaurey to discuss your treatment options and book a consultation.
            </DialogDescription>
          </DialogHeader>
          <AppointmentForm
            onSuccess={() => setIsDialogOpen(false)}
            variant="modal"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
