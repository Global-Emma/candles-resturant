import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, Phone, Utensils, Wine, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import cocktail from "@/assets/cocktail.jpg";
import SectionHeading from "@/components/SectionHeading";

const featuredDishes = [
  { name: "Signature Grilled Steak", description: "Tender cut with rich jus and seasonal greens", price: "₦8,500", image: dish1 },
  { name: "Seafood Linguine", description: "Fresh prawns and scallops in saffron cream", price: "₦7,200", image: dish2 },
  { name: "Chocolate Fondant", description: "Molten dark chocolate with gold leaf", price: "₦5,500", image: dish3 },
  { name: "Signature Cocktails", description: "Handcrafted blends by our master mixologist", price: "From ₦3,000", image: cocktail },
];

const testimonials = [
  { name: "Adaeze O.", text: "The ambiance is absolutely magical. Every dish was a masterpiece. We'll definitely be back!", rating: 5 },
  { name: "Emeka N.", text: "Best dining experience in Awka. The cocktails are world-class and the staff is incredibly attentive.", rating: 5 },
  { name: "Funke A.", text: "Perfect spot for a romantic dinner. The candlelit setting and exquisite food make it unforgettable.", rating: 4 },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Candles Restaurant candlelit dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary text-sm sm:text-base tracking-[0.4em] uppercase font-body block mb-4">
              Welcome to
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-4">
              Candles
            </h1>
            <p className="font-display text-xl sm:text-2xl italic text-gold-light mb-2">
              Restaurant & Lounge
            </p>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
              Where every flame tells a story. Indulge in exquisite cuisine, handcrafted cocktails, and an ambiance that makes every moment unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/reservations"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 glow-gold"
              >
                Reserve a Table
              </Link>
              <Link
                to="/menu"
                className="border border-primary text-primary px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Star, label: "Rating", value: "4.3 ★ (71 reviews)" },
            { icon: Clock, label: "Open Today", value: "7:00 AM – 10:30 PM" },
            { icon: MapPin, label: "Location", value: "Awka, Anambra" },
            { icon: Phone, label: "Call Us", value: "0812 495 9185" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm text-foreground font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Specialties"
          title="Featured Dishes"
          description="Crafted with passion, served with elegance. Discover our chef's most celebrated creations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-gradient-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{dish.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{dish.description}</p>
                <p className="text-primary font-semibold">{dish.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors text-sm tracking-widest uppercase font-semibold"
          >
            View Full Menu <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-card section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The Candles Experience"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Wine, label: "Great Wine List" },
              { icon: Utensils, label: "Fine Dining" },
              { icon: Star, label: "Great Cocktails" },
              { icon: Clock, label: "All-Day Dining" },
              { icon: MapPin, label: "Free Parking" },
              { icon: Phone, label: "Easy Booking" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-foreground font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Guests Say"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-card border border-border rounded-lg p-6 sm:p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">"{t.text}"</p>
              <p className="text-foreground font-display font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-card section-padding">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeading
            subtitle="Stay Updated"
            title="Join Our Newsletter"
            description="Get exclusive offers, event invitations, and new menu updates delivered to your inbox."
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              form.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              maxLength={255}
              className="flex-1 bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready for an Unforgettable Evening?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reserve your table today and experience the warmth and elegance of Candles.
          </p>
          <Link
            to="/reservations"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 glow-gold"
          >
            Make a Reservation
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
