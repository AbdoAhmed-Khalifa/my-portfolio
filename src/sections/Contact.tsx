import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

// Define Zod validation schema
const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://backend-email-one.vercel.app/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone || '',
            subject: data.subject,
            message: data.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Send confirmation email to user
      try {
        await fetch('https://backend-email-one.vercel.app/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: data.email,
            subject: 'Thank you for contacting me!',
            text: `Hi ${data.name},\n\nThank you for reaching out! I've received your message and will get back to you soon.\n\nBest regards,\nAbdelrahman`,
            html: `<p>Hi ${data.name},</p><p>Thank you for reaching out! I've received your message and will get back to you soon.</p><p>Best regards,<br>Abdelrahman</p>`,
          }),
        });
      } catch {
        // Don't show error for confirmation email failure
        console.log('Confirmation email failed to send');
      }

      toast.success('Your message has been sent!', {
        duration: 4000,
        position: 'top-center',
      });
      reset(); // Reset form on success
    } catch {
      toast.error('Failed to send message!', {
        duration: 4000,
        position: 'top-center',
      });
    }
    setLoading(false);
  };

  return (
    <section className="c-space mb-20" id="contact">
      <div className="relative min-h-dvh flex items-center justify-center flex-col">
        <div className="contact-container pt-20">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                {...register('name')}
                className="field-input"
                placeholder="ex., John Doe"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                {...register('email')}
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Phone number (optional)</span>
              <input
                type="tel"
                {...register('phone')}
                className="field-input"
                placeholder="ex., +1234567890"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Subject</span>
              <input
                type="text"
                {...register('subject')}
                className="field-input"
                placeholder="ex., Project Inquiry"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                {...register('message')}
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </label>

            <motion.button
              initial={false}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.4,
                scale: { type: 'spring', bounce: 0.5 },
              }}
              className="field-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
