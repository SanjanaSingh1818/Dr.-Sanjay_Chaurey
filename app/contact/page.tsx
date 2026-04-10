import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { AppointmentForm } from '@/components/appointment-form';

export const metadata: Metadata = {
  title: 'Contact | Dr. Sanjay Chaurey',
  description: 'Get in touch with Dr. Sanjay Chaurey for appointments and inquiries.',
  openGraph: {
    title: 'Contact Dr. Sanjay Chaurey',
    description: 'Schedule an appointment or contact us',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">Get in touch with Dr. Sanjay Chaurey today</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left - Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-lg text-foreground/80 mb-8">
                    Have questions or ready to schedule your appointment? Contact us through any of the following methods.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <a href="tel:+919971145913" className="text-foreground/80 hover:text-primary transition-colors">
                        +91-9971145913
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:contact@drsanjaychaurey.com" className="text-foreground/80 hover:text-primary transition-colors">
                        contact@drsanjaychaurey.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Clinic Address</h3>
                      <a
                        href="https://maps.google.com/?q=PSRI+Hospital,+J+Pocket,+Sheikh+Sarai,+New+Delhi,+Delhi+110017"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        PSRI Hospital<br />
                        J Pocket, Sheikh Sarai<br />
                        New Delhi, Delhi 110017
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Clinic Hours</h3>
                      <p className="text-foreground/80">
                        Monday, Wednesday, Thursday, Friday: 10 am – 5 pm <br />

Tuesday, Saturday: 10:30 am – 5 pm <br />

Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div>
                  <p className="text-foreground/80 mb-4">
                    For quick inquiries, you can also reach us on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919971145913"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.234c-1.527.766-2.877 1.803-3.976 3.072C.424 10.304-.372 12.334.128 14.337c.5 2.003 1.695 3.823 3.384 5.008 1.689 1.185 3.764 1.838 5.855 1.838 2.091 0 4.166-.653 5.855-1.838 1.689-1.185 2.884-3.005 3.384-5.008.5-2.003-.296-4.033-2.157-5.794-1.861-1.761-4.435-2.834-7.035-3.053-.56-.035-1.131 0-1.706.082" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Right - Appointment Form */}
              <div>
                <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Schedule Appointment</h2>
                  <AppointmentForm variant="card" />
                  <p className="text-xs text-foreground/60 mt-6 text-center">
                    We&apos;ll contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Find Our Clinic</h2>
              <div className="rounded-lg overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.220990592284!2d77.22278467495309!3d28.533076588591115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce338beedd471%3A0xc7bd4ede096ebbd8!2sDr%20Sanjay%20Chaurey%20(%20Surgeon)!5e0!3m2!1sen!2sin!4v1775830935817!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Sanjay Chaurey Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
