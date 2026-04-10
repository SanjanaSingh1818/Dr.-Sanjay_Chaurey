import emailjs from '@emailjs/browser';

// Initialize EmailJS
// Note: Replace these with your actual EmailJS credentials
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'default_service';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'default_template';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'default_key';

export function initializeEmailJS() {
  emailjs.init(PUBLIC_KEY);
}

export async function sendAppointmentEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
}) {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: 'contact@drchaurey.com',
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        treatment: getTreatmentLabel(data.treatment),
        appointment_date: data.date,
        appointment_time: data.time,
      }
    );
    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
}

function getTreatmentLabel(value: string): string {
  const treatments: Record<string, string> = {
    laparoscopic: 'Laparoscopic Surgery',
    robotic: 'Robotic Surgery',
    hernia: 'Hernia Treatment',
    anorectal: 'Anorectal Diseases',
    fistula: 'Complex Fistula Treatment',
  };
  return treatments[value] || value;
}
