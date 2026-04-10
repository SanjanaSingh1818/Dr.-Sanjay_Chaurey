import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Testimonials | Dr. Sanjay Chaurey',
  description: 'Read success stories and testimonials from patients treated by Dr. Sanjay Chaurey.',
  openGraph: {
    title: 'Patient Testimonials | Dr. Sanjay Chaurey',
    description: 'Real stories from satisfied patients',
    type: 'website',
    locale: 'en_IN',
  },
};

const testimonials = [
  {
    name: 'Rajesh Kumar',
    age: 45,
    treatment: 'Laparoscopic Surgery',
    city: 'Delhi',
    rating: 5,
    text: 'Dr. Chaurey&apos;s expertise and compassionate care made my surgery experience remarkably smooth. Recovery was faster than expected, and I was back to my normal routine within 2 weeks. Highly recommend!',
  },
  {
    name: 'Priya Sharma',
    age: 38,
    treatment: 'Hernia Treatment',
    city: 'Gurugram',
    rating: 5,
    text: 'The professionalism and attention to detail were outstanding. Dr. Chaurey took time to explain everything clearly and answered all my questions. I felt confident and cared for throughout the entire process.',
  },
  {
    name: 'Amit Verma',
    age: 52,
    treatment: 'Robotic Surgery',
    city: 'Delhi',
    rating: 5,
    text: 'Dr. Chaurey used the latest robotic technology and the results exceeded my expectations. The minimally invasive approach meant minimal pain and quick recovery. Excellent care!',
  },
  {
    name: 'Deepa Singh',
    age: 42,
    treatment: 'Anorectal Treatment',
    city: 'Noida',
    rating: 5,
    text: 'Excellent pre- and post-operative care. Dr. Chaurey&apos;s expertise in minimally invasive techniques meant minimal pain and quick recovery. I&apos;m very grateful for the compassionate care.',
  },
  {
    name: 'Vikram Patel',
    age: 55,
    treatment: 'Robotic Surgery',
    city: 'Delhi',
    rating: 5,
    text: 'I was nervous about surgery, but Dr. Chaurey&apos;s calm demeanor and expertise put me at ease. The robotic surgical approach was impressive, and recovery was swift. Top-notch surgeon!',
  },
  {
    name: 'Suresh Tiwari',
    age: 50,
    treatment: 'Complex Fistula Treatment',
    city: 'Dwarka',
    rating: 5,
    text: 'Dr. Chaurey&apos;s video-assisted technique for fistula treatment was incredibly effective. Minimal post-operative pain and rapid healing. I was back to work within 10 days. Outstanding care!',
  },
  {
    name: 'Anjali Gupta',
    age: 35,
    treatment: 'Laparoscopic Surgery',
    city: 'Gurgaon',
    rating: 5,
    text: 'Very professional and compassionate surgeon. The entire team was supportive. Dr. Chaurey explained the procedure in detail and addressed all my concerns. Happy with the results!',
  },
  {
    name: 'Mahesh Reddy',
    age: 48,
    treatment: 'Hernia Treatment',
    city: 'Delhi',
    rating: 5,
    text: 'Dr. Chaurey&apos;s modern surgical techniques and patient-focused approach are exceptional. Recovery was smooth, and I experienced minimal discomfort. Highly satisfied!',
  },
];

export default function TestimonialsPage() {
  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
            <p className="text-lg opacity-90">Real stories from patients treated by Dr. Sanjay Chaurey</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-secondary rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-white mb-2">{testimonials.length}+</p>
                <p className="text-foreground/80 text-white">Happy Patients</p>
              </div>
              <div className="bg-secondary rounded-lg p-6 text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={24} className="fill-accent text-accent text-white" />
                  ))}
                </div>
                <p className="text-foreground/80 text-white">Average Rating: {averageRating}/5</p>
              </div>
              <div className="bg-secondary rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-white mb-2">35+</p>
                <p className="text-foreground/80 text-white">Years of Excellence</p>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-foreground/60">
                            {testimonial.age} years old, {testimonial.city}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} size={16} className="fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs bg-accent/10 text-accent px-2 py-1 rounded inline-block">
                        {testimonial.treatment}
                      </p>
                    </div>
                    <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-accent/10 rounded-lg p-8 border-2 border-accent/30 text-center mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience Exceptional Care?</h3>
              <p className="text-foreground/80 mb-6">
                Join our many satisfied patients and schedule your consultation with Dr. Sanjay Chaurey today.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
