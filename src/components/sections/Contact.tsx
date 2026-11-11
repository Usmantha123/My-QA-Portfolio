import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<'idle' | 'openedMailto'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a short message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto integration
    const mailSubject = encodeURIComponent(
      formData.subject || `QA Inquiry from ${formData.name}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
    window.location.href = mailtoUrl;
    setStatusMessage('openedMailto');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Build Better Software Together"
          subtitle="Have a project, full-time QA opportunity, or testing challenge? Let's connect and discuss how I can help improve your product quality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card glow="blue" className="space-y-6">
              <h3 className="text-xl font-heading font-bold text-content flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                Contact Information
              </h3>

              {/* Email with Copy Action */}
              <div className="p-4 rounded-xl bg-surface-secondary border border-divider flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-content-secondary block">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-content hover:text-blue-500 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg hover:bg-surface-card border border-transparent hover:border-divider text-content-secondary hover:text-content transition-all shrink-0"
                >
                  {copiedEmail ? (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-surface-secondary border border-divider flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-content-secondary block">Location</span>
                  <span className="text-sm font-semibold text-content">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-secondary border border-divider hover:border-blue-500 flex items-center gap-2 text-xs font-medium text-content hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 shrink-0" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-secondary border border-divider hover:border-blue-500 flex items-center gap-2 text-xs font-medium text-content hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-4 h-4 shrink-0" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-content block">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Ahmed"
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-secondary border text-sm text-content placeholder:text-content-secondary/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                        errors.name ? 'border-rose-500' : 'border-divider'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-content block">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-secondary border text-sm text-content placeholder:text-content-secondary/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                        errors.email ? 'border-rose-500' : 'border-divider'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-content block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. QA Engineer Opportunity / App Testing"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-secondary border border-divider text-sm text-content placeholder:text-content-secondary/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-content block">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your application, testing requirements, or project..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-secondary border text-sm text-content placeholder:text-content-secondary/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none ${
                      errors.message ? 'border-rose-500' : 'border-divider'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Status Notice */}
                {statusMessage === 'openedMailto' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Your default email client was opened with your message pre-filled. You can also send directly to {personalInfo.email}.</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full"
                  >
                    Send Message via Email
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
