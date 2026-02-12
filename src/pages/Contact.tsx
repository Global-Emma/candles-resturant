import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = "w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <main className="pt-20">
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading subtitle="Get in Touch" title="Contact Us" />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {[
              { icon: MapPin, title: "Visit Us", lines: ["Rt. Hon. Uche Okafor Street", "Awka 420112, Anambra", "Plus Code: 64W3+64 Awka"] },
              { icon: Phone, title: "Call Us", lines: ["0812 495 9185"] },
              { icon: Clock, title: "Opening Hours", lines: ["Monday: 6:00 AM – 10:30 PM", "Tue – Sun: 7:00 AM – 10:30 PM"] },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d7.07!3d6.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzYuMCJOIDfCsDA0JzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Candles Restaurant location"
              />
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-gradient-card border border-border rounded-lg p-6 sm:p-8 h-fit"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Send Us a Message</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Name *</label>
                <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Email *</label>
                <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Subject *</label>
              <input type="text" required maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Message *</label>
              <textarea required maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none h-32`} placeholder="Your message..." />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
