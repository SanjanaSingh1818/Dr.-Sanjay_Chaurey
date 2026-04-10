# Dr. Sanjay Chaurey - Medical Website

A modern, SEO-optimized medical website for Dr. Sanjay Chaurey, a Senior Consultant Surgeon with 35+ years of experience in minimally invasive and robotic surgery.

## Features

- **Modern, Responsive Design**: Clean, professional design that looks great on all devices
- **Dynamic Treatment Pages**: SEO-friendly treatment pages with structured content
- **Appointment System**: EmailJS integration for appointment requests
- **Framer Motion Animations**: Smooth, subtle animations throughout the site
- **SEO Optimization**: Metadata, schema markup, sitemap, and robots.txt
- **Contact Forms**: Multiple contact options including WhatsApp integration
- **Patient Testimonials**: Dynamic testimonial section with patient reviews
- **FAQ Section**: Comprehensive FAQ section with accordion UI
- **Mobile-Friendly**: Fully responsive design with mobile-optimized features

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **EmailJS** - Email service for appointment notifications
- **Shadcn/UI** - High-quality UI components

## Project Structure

```
/app
  /about           # About Doctor page
  /contact         # Contact page
  /faqs            # FAQs page
  /testimonials    # Testimonials page
  /delhi
    /treatment
      /[slug]      # Dynamic treatment pages
  page.tsx         # Home page
  layout.tsx       # Root layout

/components
  /sections        # Page sections (hero, treatments, etc.)
  /ui              # Shadcn/UI components
  navbar.tsx       # Navigation bar
  footer.tsx       # Footer
  appointment-form.tsx # Appointment form component
  treatment-content.tsx # Dynamic treatment content
  whatsapp-button.tsx  # WhatsApp floating button

/lib
  emailjs-config.ts    # EmailJS configuration
  animations.ts        # Framer Motion animation variants
  schema.ts            # SEO schema markup
  utils.ts             # Utility functions
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Set up your email service (Gmail recommended)
4. Create an email template for appointment notifications
5. Copy your **Service ID**, **Template ID**, and **Public Key**

### 3. Add Environment Variables

Create a `.env.local` file in the root directory (or add to Vercel project settings):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Update Content

Replace placeholder content throughout the site:

- Update doctor information in components and pages
- Add actual phone numbers, email, and clinic address
- Update WhatsApp phone number in `components/whatsapp-button.tsx`
- Add professional photos and images
- Update schema markup in `lib/schema.ts` with actual clinic details

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Customization

### Colors and Theme

The color scheme uses a medical blue as primary color with cream/off-white backgrounds. Customize colors in:
- `app/globals.css` - CSS variables for the theme
- `tailwind.config.ts` - Tailwind configuration

### Fonts

The site uses Geist font family. To change fonts:
1. Modify imports in `app/layout.tsx`
2. Update `tailwind.config.ts` with new font families
3. Update `globals.css` theme variables

### Treatments

To add or modify treatments:
1. Update treatment data in `components/treatment-content.tsx`
2. Update treatments list in `components/navbar.tsx`
3. Update dynamic route handling in `app/delhi/treatment/[slug]/page.tsx`

## SEO Features

- **Metadata**: Title, description, and og tags on all pages
- **Schema Markup**: Doctor, clinic, FAQ, and organization schemas
- **Sitemap**: Auto-generated sitemap at `/public/sitemap.xml`
- **Robots.txt**: SEO-friendly robots configuration
- **Heading Structure**: Proper H1, H2, H3 hierarchy
- **Mobile Optimization**: Mobile-first responsive design

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Add environment variables in Vercel settings
4. Deploy!

```bash
npm run build
npm run start
```

## Pages

### Home (`/`)
- Hero section with CTA
- Treatment specializations
- About preview
- Patient testimonials
- Call-to-action section

### About (`/about`)
- Professional background
- Areas of expertise
- Philosophy and approach
- Qualifications
- Achievements and statistics

### Contact (`/contact`)
- Contact information
- Appointment booking form
- WhatsApp integration
- Map location placeholder

### FAQs (`/faqs`)
- Categorized questions and answers
- Accordion UI
- Contact CTA

### Testimonials (`/testimonials`)
- Patient reviews and ratings
- Treatment information
- Patient statistics

### Treatment Pages (`/delhi/treatment/[slug]`)
- Dynamic treatment pages for:
  - Laparoscopic Surgery
  - Robotic Surgery
  - Hernia Treatment
  - Anorectal Diseases
  - Complex Fistula Treatment

## Components

### Core Components
- **Navbar**: Responsive navigation with treatment dropdown
- **Footer**: Contact info and links
- **AppointmentForm**: Form with validation and EmailJS integration
- **WhatsAppButton**: Floating WhatsApp contact button

### Section Components
- **HeroSection**: Main landing hero with appointment form
- **TreatmentsSection**: Treatment cards showcase
- **AboutPreviewSection**: About doctor preview
- **TestimonialsSection**: Patient testimonials slider
- **CTASection**: Call-to-action section

## Best Practices

1. **Keep animations subtle** - Used for entrance effects and hover states
2. **Maintain accessibility** - All images have alt text, proper heading structure
3. **Mobile-first** - Design starts mobile, enhanced for larger screens
4. **Performance** - Lazy load images, optimize bundle size
5. **Responsiveness** - Test on various devices and screen sizes

## Troubleshooting

### EmailJS Not Working
- Check that environment variables are set correctly
- Verify EmailJS credentials
- Check browser console for errors
- Ensure email service is set up in EmailJS dashboard

### Styling Issues
- Clear `.next` folder and rebuild
- Check Tailwind configuration
- Verify CSS variables in `globals.css`

### Build Errors
- Clear `node_modules` and reinstall
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct

## Future Enhancements

- [ ] Add blog section
- [ ] Patient portal for appointment tracking
- [ ] Before/after image gallery
- [ ] Video testimonials
- [ ] Online consultation booking
- [ ] Multi-language support
- [ ] Patient feedback system
- [ ] Integration with clinic management software

## License

This project is created for Dr. Sanjay Chaurey's medical practice.

## Support

For issues or questions about the website, please contact the development team.
