import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ScrollReveal } from '../ui/ScrollReveal';
import { GradientText } from '../ui/GradientText';
import { personalInfo } from '../../data/data';
import {
  FiMail,
  FiClock,
  FiMapPin,
  FiSend,
  FiCheck,
  FiLoader,
  FiAlertCircle
} from 'react-icons/fi';
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter
} from 'react-icons/fa6';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const MAX_MESSAGE_LENGTH = 500;

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Enforce message length limit
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) {
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setStatus({ type: 'loading', message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        to_name: personalInfo.name,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);

      let errorMessage = 'Failed to send message. Please try again later.';

      if (error instanceof Error) {
        if (error.message.includes('configuration')) {
          errorMessage = error.message;
        }
      }

      setStatus({
        type: 'error',
        message: errorMessage,
      });

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const socialLinks = [
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/uinova.fx/',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500'
    },
    {
      icon: FaLinkedinIn,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FaYoutube,
      href: '#',
      label: 'YouTube',
      color: 'hover:bg-red-600'
    },
    {
      icon: FaXTwitter,
      href: '#',
      label: 'X (Twitter)',
      color: 'hover:bg-gray-900'
    },
  ];

  const charactersLeft = MAX_MESSAGE_LENGTH - formData.message.length;

  return (
    <div className="section-wrap" id="contact">
      <div className="contact-grid">
        {/* Left Column - Info */}
        <ScrollReveal>
          <div className="contact-left">
            <div className="section-eyebrow">Get in Touch</div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Let's <GradientText>Connect</GradientText>
            </h2>
            <p className="contact-desc">
              Have a question, idea, or just want to chat? I'm always open to discussing
              new projects, creative opportunities, or ways to collaborate.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail size={20} />
                </div>
                <div className="contact-text">
                  <strong>Email</strong>
                  {personalInfo.email}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FiClock size={20} />
                </div>
                <div className="contact-text">
                  <strong>Response Time</strong>
                  Usually within 24 hours
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin size={20} />
                </div>
                <div className="contact-text">
                  <strong>Location</strong>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <p className="contact-socials-label">Follow me on</p>
              <div className="socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`social-btn ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column - Form */}
        <ScrollReveal delay="delay-2">
          <div className="contact-form-wrap">
            <div className="form-title">Send a Message</div>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Name & Email Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    disabled={status.type === 'loading'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                    disabled={status.type === 'loading'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about? (optional)"
                  disabled={status.type === 'loading'}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="contact-message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what's on your mind..."
                  required
                  rows={5}
                  maxLength={MAX_MESSAGE_LENGTH}
                  disabled={status.type === 'loading'}
                />
                <div className="message-counter">
                  <span className={charactersLeft < 50 ? 'counter-warning' : ''}>
                    {charactersLeft}
                  </span>
                  {' '}characters left
                </div>
              </div>

              {/* Status Messages */}
              {status.type === 'error' && (
                <div className="form-status form-status--error" role="alert">
                  <FiAlertCircle size={16} />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'success' && (
                <div className="form-status form-status--success" role="status">
                  <FiCheck size={16} />
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? (
                  <>
                    <FiLoader size={16} className="spinner" />
                    Sending...
                  </>
                ) : status.type === 'success' ? (
                  <>
                    <FiCheck size={16} />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};