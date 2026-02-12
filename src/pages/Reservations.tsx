import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(20),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Party size is required"),
  occasion: z.string().optional(),
  notes: z.string().max(500).optional(),
});

const Reservations = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = reservationSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    toast.success("Reservation request submitted! We'll confirm shortly via email or phone.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "" });
  };

  const inputClass = "w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <main className="pt-20">
      <section className="section-padding max-w-2xl mx-auto">
        <SectionHeading
          subtitle="Book Your Table"
          title="Make a Reservation"
          description="Secure your spot for an unforgettable dining experience at Candles."
        />
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-5 bg-gradient-card border border-border rounded-lg p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Full Name *</label>
              <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Email *</label>
              <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="john@example.com" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Phone *</label>
              <input type="tel" required maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="0812 495 9185" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Party Size *</label>
              <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Date *</label>
              <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Time *</label>
              <input type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">Occasion</label>
            <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className={inputClass}>
              <option value="">Select occasion (optional)</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="date">Date Night</option>
              <option value="business">Business Dinner</option>
              <option value="celebration">Celebration</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1.5">Special Requests</label>
            <textarea maxLength={500} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={`${inputClass} resize-none h-24`} placeholder="Any dietary requirements or special requests..." />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors glow-gold"
          >
            Reserve My Table
          </button>
        </motion.form>
      </section>
    </main>
  );
};

export default Reservations;
