import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import { Accessibility, Car, CreditCard, Users, Heart, Utensils } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={interior1} alt="Candles Restaurant interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Our Story
          </motion.h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Where warmth meets elegance</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Our Philosophy</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
              A Flame of Passion for Fine Dining
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Candles Restaurant & Lounge was born from a simple yet powerful vision — to create a dining destination where every guest feels the warmth of exceptional hospitality, wrapped in an ambiance that ignites the senses.
              </p>
              <p>
                Nestled in the heart of Awka, Anambra, our restaurant brings together the finest locally-sourced ingredients, world-class culinary techniques, and an atmosphere that transforms every meal into a cherished memory.
              </p>
              <p>
                From our signature candlelit setting to our carefully curated wine list and handcrafted cocktails, every detail at Candles is designed to create moments of joy, connection, and culinary delight.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img src={interior2} alt="Candles dining area" className="w-full h-full object-cover rounded-lg" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="What We Offer" title="More Than Just Dining" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Utensils, title: "Fine Cuisine", desc: "Expertly prepared dishes from breakfast through dinner, featuring local and international flavors." },
              { icon: Heart, title: "Warm Ambiance", desc: "A cosy, romantic, and trendy atmosphere perfect for every occasion." },
              { icon: Users, title: "For Everyone", desc: "Welcoming families, tourists, groups, students, and solo diners alike." },
              { icon: Accessibility, title: "Fully Accessible", desc: "Wheelchair-accessible parking, entrance, and restrooms for all guests." },
              { icon: Car, title: "Free Parking", desc: "Generous free street and lot parking so you can dine worry-free." },
              { icon: CreditCard, title: "Easy Payments", desc: "Credit cards, debit cards, and NFC mobile payments accepted." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-lg p-6"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
