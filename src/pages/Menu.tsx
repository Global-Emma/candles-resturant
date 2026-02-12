import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "lucide-react";

const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Peppered Snails", price: "₦6,000", description: "Spicy garden snails in rich pepper sauce", popular: true },
      { name: "Spring Rolls", price: "₦3,500", description: "Crispy rolls with vegetable filling" },
      { name: "Chicken Wings", price: "₦4,500", description: "Flame-grilled wings with house dipping sauce", popular: true },
      { name: "Bruschetta", price: "₦3,000", description: "Toasted bread with fresh tomato and basil" },
    ],
  },
  {
    name: "Main Course",
    items: [
      { name: "Signature Grilled Steak", price: "₦8,500", description: "Premium cut with rich jus and seasonal vegetables", popular: true },
      { name: "Seafood Linguine", price: "₦7,200", description: "Fresh prawns, scallops in saffron cream sauce" },
      { name: "Jollof Rice Special", price: "₦5,500", description: "Our signature smoky jollof with grilled chicken", popular: true },
      { name: "Grilled Catfish", price: "₦7,000", description: "Whole catfish with pepper sauce and plantain" },
      { name: "Lamb Chops", price: "₦9,500", description: "Herb-crusted lamb with mint jelly and roast potatoes" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Chocolate Fondant", price: "₦5,500", description: "Molten dark chocolate cake with gold leaf", popular: true },
      { name: "Crème Brûlée", price: "₦4,000", description: "Classic vanilla custard with caramelized sugar" },
      { name: "Fruit Platter", price: "₦3,500", description: "Seasonal tropical fruits beautifully arranged" },
    ],
  },
  {
    name: "Cocktails & Drinks",
    items: [
      { name: "Candles Signature", price: "₦4,500", description: "Our house specialty blend — a must try", popular: true },
      { name: "Classic Mojito", price: "₦3,500", description: "Fresh mint, lime, and white rum" },
      { name: "Espresso Martini", price: "₦4,000", description: "Coffee-infused vodka with crema" },
      { name: "Premium Wine (Glass)", price: "₦3,000", description: "Selection of red, white, and rosé wines" },
      { name: "Craft Beer", price: "₦2,500", description: "Rotating selection of local and imported beers" },
      { name: "Fresh Smoothies", price: "₦2,000", description: "Blended tropical fruits, no sugar added" },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  return (
    <main className="pt-20">
      <section className="section-padding max-w-5xl mx-auto">
        <SectionHeading
          subtitle="Culinary Excellence"
          title="Our Menu"
          description="Every dish tells a story of passion, tradition, and innovation. Prices range from ₦5,000 to ₦10,000 per person."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        {menuCategories
          .filter((cat) => cat.name === activeCategory)
          .map((cat) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start justify-between bg-gradient-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                      {item.popular && (
                        <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3 fill-primary" /> Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="text-primary font-semibold ml-4 whitespace-nowrap">{item.price}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
      </section>
    </main>
  );
};

export default Menu;
