import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Pregnancy Chiropractic (Webster)',
  'Postpartum Recovery',
  'Pediatric Care (Infants)',
  'Kids & Teens',
  'Family Chiropractic',
  'Wellness Care',
  'Nervous System / INSiGHT Scans',
  'ADHD & Sensory Processing',
  'Colic & Reflux Relief',
  'Ear Infections & Immunity',
  'General Inquiry',
];

const TRACKING_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'gclid', 'msclkid', 'fbclid',
] as const;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });

  // Capture and persist tracking params across page navigations
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    TRACKING_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        sessionStorage.setItem(`tlc_${key}`, value);
      }
    });
    if (document.referrer && !sessionStorage.getItem('tlc_referrer')) {
      sessionStorage.setItem('tlc_referrer', document.referrer);
    }
  }, []);

  const getTrackingData = () => {
    const data: Record<string, string> = {};
    TRACKING_PARAMS.forEach((key) => {
      const value = sessionStorage.getItem(`tlc_${key}`);
      if (value) data[key] = value;
    });
    const referrer = sessionStorage.getItem('tlc_referrer');
    if (referrer) data.referrer = referrer;
    data.page_url = window.location.href;
    return data;
  };

  const fireConversionEvents = () => {
    // Google Tag Manager / gtag.js
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'form_submission',
        form_name: 'contact',
        service_interest: formData.service || 'not specified',
      });
    }

    // Meta Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', {
        content_name: formData.service || 'Contact Form',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...getTrackingData(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', service: '' });
        fireConversionEvents();
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-4">Thank you for reaching out. We'll get back to you within 1 business day.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-brand-gold font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="cf-name" className="block text-sm font-semibold text-gray-700 mb-1.5">Name <span className="text-red-400">*</span></label>
        <input
          id="cf-name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Your full name"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email <span className="text-red-400">*</span></label>
          <input
            id="cf-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
          <input
            id="cf-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="(555) 123-4567"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-sm font-semibold text-gray-700 mb-1.5">Interested In</label>
        <select
          id="cf-service"
          value={formData.service}
          onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
        <textarea
          id="cf-message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Tell us how we can help..."
          rows={4}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-gold hover:bg-brand-gold-dark disabled:opacity-60 text-white py-3.5 rounded-full font-bold text-base shadow-lg shadow-brand-gold/20 hover:shadow-xl hover:shadow-brand-gold/30 transition-all flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
