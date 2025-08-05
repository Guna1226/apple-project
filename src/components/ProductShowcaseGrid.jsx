import { motion } from "framer-motion";
import ipadPro from "../assets/images/ipad_pro_black.jpg";
import macbookPro from "../assets/images/macbookpro.jpg";
import airpodsPro from "../assets/images/airpods.jpg";
import watch from "../assets/images/watch_series10.jpg";
import macforStudents from "../assets/images/mac_for_students.jpg";
import tradein from "../assets/images/trade_in.webp";

const products = [
  {
    name: "iPad Pro",
    image: ipadPro,
    url: "https://www.apple.com/in/ipad-pro/",
  },
  {
    name: "MacBook Pro",
    image: macbookPro,
    url: "https://www.apple.com/in/macbook-pro/",
  },
  {
    name: "AirPods Pro",
    image: airpodsPro,
    url: "https://www.apple.com/in/airpods-pro/",
  },
  {
    name: "Apple Watch",
    image: watch,
    url: "https://www.apple.com/in/apple-watch/",
  },
  {
    name: "Back to School",
    image: macforStudents,
    url: "https://www.apple.com/in/shop/back-to-school",
  },
  {
    name: "Trade In",
    image: tradein,
    url: "https://www.apple.com/in/shop/trade-in",
  }
];

export default function ProductShowcaseGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 w-full">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-cover bg-center relative text-white h-[300px] group transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
          <div className="relative z-10 flex flex-col justify-center h-full items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-semibold mb-3"
            >
              {product.name}
            </motion.h1>
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-1 rounded-full text-xs font-medium hover:bg-gray-300 transition"
              >
                Learn more
              </a>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-blue-700 transition"
              >
                Buy
              </a>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}

