
'use client'
import Navbar from '@/app/navbar';
import { useRef, useState } from 'react';
 
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });
 
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
 
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
 
      if (!res.ok) {
        throw new Error('Failed to send message');
      }
 
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      formRef.current?.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
  };
 
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <div className="space-y-2 form-item-row">
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input id="name" name="name" type="text" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name"  />
      </div>
 
      <div className="space-y-2 form-item-row">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@example.com" />
      </div>
 
      <div className="space-y-2 form-item-row">
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea id="message" name="message" required rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message" />
      </div>
 
      <button type="submit" disabled={status.type === 'loading'} className="company-cta w-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
 
      {status.message && (
        <p
          className={`text-sm ${
            status.type === 'error'
              ? 'text-red-500'
              : status.type === 'success'
              ? 'text-green-500'
              : 'text-gray-500'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}