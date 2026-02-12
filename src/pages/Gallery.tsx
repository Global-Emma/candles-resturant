import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-restaurant.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import cocktail from "@/assets/cocktail.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const images = [
  { src: heroImage, alt: "Candlelit dining table", category: "Ambiance" },
  { src: dish1, alt: "Signature grilled steak", category: "Food" },
  { src: interior1, alt: "Restaurant interior", category: "Interior" },
  { src: cocktail, alt: "Signature cocktail", category: "Drinks" },
  { src: dish2, alt: "Seafood linguine", category: "Food" },
  { src: interior2, alt: "Cozy dining area", category: "Interior" },
  { src: dish3, alt: "Chocolate fondant dessert", category: "Desserts" },
];

const Gallery = () => {
  return (
    <main className="pt-20">
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Visual Journey"
          title="Our Gallery"
          description="A glimpse into the Candles experience — from our plated creations to our warm, inviting spaces."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-lg ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <div className={`${i === 0 ? "aspect-[16/10]" : "aspect-square"}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-primary tracking-widest uppercase">{img.category}</span>
                  <p className="text-foreground font-display font-semibold">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
