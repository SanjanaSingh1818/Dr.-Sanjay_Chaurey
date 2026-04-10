import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQs | Dr. Sanjay Chaurey',
  description: 'Frequently asked questions about Dr. Sanjay Chaurey\'s surgical procedures and services.',
  openGraph: {
    title: 'FAQs | Dr. Sanjay Chaurey',
    description: 'Common questions about surgical procedures answered',
    type: 'website',
    locale: 'en_IN',
  },
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Dr. Sanjay Chaurey\'s experience?',
        a: 'Dr. Chaurey is a Senior Consultant Surgeon with over 35 years of experience in surgical care. He is a pioneer in minimally invasive and robotic surgical techniques.'
      },
      {
        q: 'How do I schedule an appointment?',
        a: 'You can schedule an appointment through our website by filling out the appointment form, calling us directly, or visiting our clinic. We typically confirm appointments within 24 hours.'
      },
      {
        q: 'What insurance do you accept?',
        a: 'We accept most major insurance providers. Please contact us to confirm if your insurance is accepted.'
      },
    ]
  },
  {
    category: 'Laparoscopic Surgery',
    questions: [
      {
        q: 'What is laparoscopic surgery?',
        a: 'Laparoscopic surgery is a minimally invasive technique that uses small incisions (5-10mm) and specialized instruments with a camera to perform surgical procedures. This results in less pain, smaller scars, and faster recovery.'
      },
      {
        q: 'How long is recovery after laparoscopic surgery?',
        a: 'Most patients recover within 1-2 weeks for normal activities and 3-4 weeks for full recovery. Pain is minimal due to the small incisions.'
      },
      {
        q: 'Am I a candidate for laparoscopic surgery?',
        a: 'Many patients are candidates for laparoscopic surgery. Dr. Chaurey will evaluate your specific condition and determine if you\'re suitable for this approach during consultation.'
      },
    ]
  },
  {
    category: 'Robotic Surgery',
    questions: [
      {
        q: 'What is robotic-assisted surgery?',
        a: 'Robotic surgery uses advanced technology where the surgeon controls robotic arms from a console. This provides enhanced precision, 3D visualization, and better control, often resulting in better outcomes.'
      },
      {
        q: 'Is robotic surgery safe?',
        a: 'Yes, robotic surgery is safe and FDA-approved. Dr. Chaurey has extensive training in robotic surgery techniques and maintains the highest safety standards.'
      },
      {
        q: 'What is the recovery time for robotic surgery?',
        a: 'Recovery is typically faster than open surgery. Most patients experience minimal pain and can return to normal activities within 2-4 weeks.'
      },
    ]
  },
  {
    category: 'Hernia Treatment',
    questions: [
      {
        q: 'What causes a hernia?',
        a: 'Hernias result from weak spots in muscle tissue, allowing organs to push through. They can be caused by genetics, strain, surgery, or conditions that increase abdominal pressure.'
      },
      {
        q: 'Do all hernias need surgery?',
        a: 'Not all hernias require immediate surgery. Some can be monitored with lifestyle modifications. Dr. Chaurey will assess your hernia and recommend the best approach.'
      },
      {
        q: 'What is the recurrence rate after hernia repair?',
        a: 'With modern surgical techniques and proper repair, recurrence rates are low (less than 5-10%). Dr. Chaurey uses advanced methods to minimize recurrence risk.'
      },
    ]
  },
  {
    category: 'Pre & Post-Surgery',
    questions: [
      {
        q: 'What should I do to prepare for surgery?',
        a: 'Dr. Chaurey will provide detailed pre-operative instructions including fasting, medication adjustments, and tests. Follow all instructions carefully for best results.'
      },
      {
        q: 'What pain management is available after surgery?',
        a: 'We use multimodal pain management including local anesthesia during surgery, medications, and other techniques to minimize post-operative pain.'
      },
      {
        q: 'When can I return to work?',
        a: 'This depends on the type of surgery and your job. Typically, after minimally invasive surgery, you can return to desk work within 1-2 weeks and physical work within 4-6 weeks.'
      },
      {
        q: 'What complications should I watch for?',
        a: 'Contact us immediately if you experience severe pain, fever, excessive bleeding, or signs of infection. Most complications are manageable when caught early.'
      },
    ]
  }
];

export default function FAQsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90">Answers to common questions about our surgical procedures and services</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((faq, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${index}-${qIndex}`}
                        className="border border-border rounded-lg"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-secondary/30">
                          <span className="text-left font-semibold text-foreground">
                            {faq.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 bg-secondary/20 text-foreground/80">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}

              {/* Contact CTA */}
              <div className="bg-accent/10 rounded-lg p-8 border-2 border-accent/30 text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Didn&apos;t find your answer?</h3>
                <p className="text-foreground/80 mb-6">
                  Contact us directly and our team will be happy to answer any questions you have.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
