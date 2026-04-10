'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const appointmentSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  treatment: z.string().min(1, 'Please select a treatment'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const treatments = [
  { value: 'laparoscopic', label: 'Laparoscopic Surgery' },
  { value: 'robotic', label: 'Robotic Surgery' },
  { value: 'hernia', label: 'Hernia Treatment' },
  { value: 'anorectal', label: 'Anorectal Diseases' },
  { value: 'fistula', label: 'Complex Fistula Treatment' },
];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

interface AppointmentFormProps {
  onSuccess?: () => void;
  variant?: 'card' | 'modal';
}

export function AppointmentForm({ onSuccess, variant = 'card' }: AppointmentFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const treatment = watch('treatment');
  const date = watch('date');

  const onSubmit = async (data: AppointmentFormData) => {
    setIsLoading(true);
    try {
      const { sendAppointmentEmail, initializeEmailJS } = await import('@/lib/emailjs-config');
      
      // Initialize EmailJS if not already done
      initializeEmailJS();
      
      // Send appointment email
      await sendAppointmentEmail(data);

      toast({
        title: 'Success!',
        description: 'Your appointment request has been submitted. We will contact you soon.',
      });

      reset();
      onSuccess?.();
    } catch (error) {
      console.error('Appointment submission error:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit appointment. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Input
            placeholder="First Name"
            {...register('firstName')}
            className={errors.firstName ? 'border-destructive' : ''}
          />
          {errors.firstName && (
            <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <Input
            placeholder="Last Name"
            {...register('lastName')}
            className={errors.lastName ? 'border-destructive' : ''}
          />
          {errors.lastName && (
            <p className="text-xs text-destructive mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Phone Number"
          {...register('phone')}
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && (
          <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Select value={treatment} onValueChange={(value) => setValue('treatment', value)}>
          <SelectTrigger className={errors.treatment ? 'border-destructive' : ''}>
            <SelectValue placeholder="Select Treatment" />
          </SelectTrigger>
          <SelectContent>
            {treatments.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.treatment && (
          <p className="text-xs text-destructive mt-1">{errors.treatment.message}</p>
        )}
      </div>

      <div>
        <Input
          type="date"
          {...register('date')}
          className={errors.date ? 'border-destructive' : ''}
        />
        {errors.date && (
          <p className="text-xs text-destructive mt-1">{errors.date.message}</p>
        )}
      </div>

      <div>
        <Select value={watch('time') || ''} onValueChange={(value) => setValue('time', value)}>
          <SelectTrigger className={errors.time ? 'border-destructive' : ''}>
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem key={slot} value={slot}>
                {slot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.time && (
          <p className="text-xs text-destructive mt-1">{errors.time.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {isLoading ? 'Booking...' : 'Book Appointment'}
      </Button>
    </form>
  );
}
