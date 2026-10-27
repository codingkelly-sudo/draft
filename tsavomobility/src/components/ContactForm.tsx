import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ffc400', color: '#ffc400', textAlign: 'center' }}>
        <h3>Thank you!</h3>
        <p>Your message has been sent. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="John Doe" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="john@example.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={5} placeholder="Tell us about your project..." required></textarea>
      </div>
      <button type="submit" className="btn btn-line" style={{ width: '100%' }}>Send Message</button>
    </form>
  );
}
