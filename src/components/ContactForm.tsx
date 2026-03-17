import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message. We will be in touch shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <label className="label-text text-muted-foreground block mb-2">Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full py-3 px-0 bg-transparent border-b border-input text-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
        />
      </div>
      <div>
        <label className="label-text text-muted-foreground block mb-2">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full py-3 px-0 bg-transparent border-b border-input text-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
        />
      </div>
      <div>
        <label className="label-text text-muted-foreground block mb-2">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full py-3 px-0 bg-transparent border-b border-input text-foreground focus:border-foreground focus:outline-none transition-colors text-sm resize-none"
        />
      </div>
      <button type="submit" className="btn-primary mt-4">
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;
