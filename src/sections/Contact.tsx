import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Zoom } from 'react-toastify';
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  console.log('contact');

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_s7l4mh9',
        'template_0intemb',
        {
          from_name: form.name,
          to_name: 'Abdelrahman',
          from_email: form.email,
          to_email: 'abdelrahmanahmedkhalifa99@gmail.com',
          message: form.message,
        },
        'yzUWLHr8ssVigigZO'
      );
      setLoading(false);
      toast.success('Your message has been sent!', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setLoading(false);
      toast.error('Failed to send email!', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      });
    }
  };
  //service_s7l4mh9
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-dvh flex items-center justify-center flex-col">
        {/* <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          loading="lazy"
          className="absolute inset-0 min-h-[110dvh]"
        /> */}

        <div className="contact-container pt-20 ">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
