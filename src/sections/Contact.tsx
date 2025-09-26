import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { fadeInUp, staggerContainer } from '../utils/animations';
import type { ContactFormData } from '../types';

// Define Zod validation schema
const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://backend-email-one.vercel.app/api/contact',
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
      toast.success('Your message has been sent!', {
        duration: 4000,
        position: 'top-center',
      });
      reset();
    } catch {
      toast.error('Failed to send message!', {
        duration: 4000,
        position: 'top-center',
      });
    }
    setLoading(false);
  };

  return (
    <Section 
      id="contact" 
      title="Let's Work Together" 
      subtitle="Ready to bring your ideas to life? Let's discuss your next project"
    >
      <div className="relative min-h-dvh flex items-center justify-center flex-col">
        <motion.div 
          className="contact-container"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto">
            <motion.p 
              className="text-lg text-white-600 text-center mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Whether you're looking to build a new website, improve your existing
              platform, or bring a unique project to life, I'm here to help.
            </motion.p>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-6"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.label className="space-y-3" variants={fadeInUp}>
                  <span className="field-label">Full Name *</span>
                  <input
                    type="text"
                    {...register('name')}
                    className="field-input"
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <motion.p 
                      className="text-red-400 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.label>

                <motion.label className="space-y-3" variants={fadeInUp}>
                  <span className="field-label">Email Address *</span>
                  <input
                    type="email"
                    {...register('email')}
                    className="field-input"
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <motion.p 
                      className="text-red-400 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.label className="space-y-3" variants={fadeInUp}>
                  <span className="field-label">Phone Number</span>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="field-input"
                    placeholder="+1 (555) 123-4567"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <motion.p 
                      className="text-red-400 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.phone.message}
                    </motion.p>
                  )}
                </motion.label>

                <motion.label className="space-y-3" variants={fadeInUp}>
                  <span className="field-label">Subject *</span>
                  <input
                    type="text"
                    {...register('subject')}
                    className="field-input"
                    placeholder="Project Inquiry"
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <motion.p 
                      className="text-red-400 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.subject.message}
                    </motion.p>
                  )}
                </motion.label>
              </div>

              <motion.label className="space-y-3" variants={fadeInUp}>
                <span className="field-label">Your Message *</span>
                <textarea
                  {...register('message')}
                  rows={6}
                  className="field-input resize-none"
                  placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <motion.p 
                    className="text-red-400 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </motion.label>

              <motion.button
                className="field-btn disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
                variants={fadeInUp}
                whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -2 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {loading ? (
                  <>
                    <LoadingSpinner size="sm" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.img
                      src="/assets/arrow-up.png"
                      alt="arrow-up"
                      className="field-btn_arrow"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </>
                )}
              </motion.button>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

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
