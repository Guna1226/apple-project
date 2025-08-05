import React from 'react';
import { motion } from 'framer-motion';

import ipadImage from '../assets/images/ipad_pro_black.jpg';
import watchImage from '../assets/images/watch_series10.jpg';
import macStudents from '../assets/images/mac_for_students.jpg';
import airpods from '../assets/images/airpods_4.jpg';
import macbookProImage from '../assets/images/macbook_pro.jpg';
import tradeInImage from '../assets/images/trade_in.webp';

// Reusable button group
const ButtonGroup = ({ learnLink = "#", buyLink = "#" }) => (
  <div className="flex gap-4 mb-4">
    <a
      href={learnLink}
      className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
    >
      Learn more
    </a>
    {buyLink && (
      <a
        href={buyLink}
        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
      >
        Buy
      </a>
    )}
  </div>
);

export default function SplitHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[14px] w-full px-[14px] py-8 bg-white">
      
      {/* iPad Pro */}
      <div className="bg-black text-white flex flex-col items-center text-center px-6 h-[580px] md:h-[600px]">
        <motion.h1 className="text-4xl md:text-5xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          iPad Pro
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
        >
          Unbelievably thin. Incredibly powerful.
        </motion.p>
        <ButtonGroup />
        <motion.img
          src={ipadImage}
          alt="iPad Pro"
          className="w-auto max-h-[300px] object-contain mt-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        />
        <p className="mt-4 text-sm font-medium">
          <span className="text-blue-500">Built for </span>
          <span className="text-pink-500">Apple Intelligence</span>
          <span className="text-orange-500">.</span>
        </p>
      </div>

      {/* Apple Watch */}
      <div className="bg-[#f5f5f7] text-black flex flex-col items-center text-center px-6 h-[580px] md:h-[600px]">
        <motion.h1 className="text-3xl md:text-4xl font-semibold mb-1"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <span className="font-sans"></span> WATCH
        </motion.h1>
        <h2 className="uppercase text-sm font-semibold tracking-wide text-gray-600 mb-2">
          Series 10
        </h2>
        <motion.p className="text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
        >
          Thinstant classic.
        </motion.p>
        <ButtonGroup />
        <motion.img
          src={watchImage}
          alt="Apple Watch Series 10"
          className="w-auto max-h-[300px] object-contain mt-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        />
      </div>

      {/* Mac for Students */}
      <div className="bg-black text-white flex flex-col items-center text-center px-6 h-[580px] md:h-[600px]">
        <motion.h1 className="text-4xl md:text-5xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          Mac for Students
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
        >
          Power through college. Built for learning.
        </motion.p>
        <ButtonGroup />
        <motion.img
          src={macStudents}
          alt="Mac for Students"
          className="w-auto max-h-[300px] object-contain mt-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        />
      </div>

      {/* AirPods 4 */}
      <div className="bg-[#f5f5f7] text-black flex flex-col items-center text-center px-6 h-[580px] md:h-[600px]">
        <motion.h1 className="text-4xl md:text-5xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          AirPods 4
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
        >
          Iconic. Now supersonic. <br />
          Available with Active Noise Cancellation.²
        </motion.p>
        <ButtonGroup />
        <motion.img
          src={airpods}
          alt="AirPods 4"
          className="w-auto max-h-[300px] object-contain mt-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        />
      </div>

      {/* MacBook Pro */}
      <div className="bg-black text-white flex flex-col items-center text-center px-6 h-[580px] md:h-[600px]">
        <motion.h1 className="text-4xl md:text-5xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          MacBook Pro
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
        >
          A work of smart.
        </motion.p>
        <ButtonGroup />
        <motion.img
          src={macbookProImage}
          alt="MacBook Pro"
          className="w-auto max-h-[300px] object-contain mt-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        />
        <p className="mt-4 text-sm font-medium">
          <span className="text-blue-500">Built for </span>
          <span className="text-pink-500">Apple Intelligence</span>
          <span className="text-orange-500">.</span>
        </p>
      </div>

      {/* Trade In */}
      <div className="bg-[#f5f5f7] text-black flex flex-col items-center text-center px-6 h-[580px] md:h-[600px]">
        <motion.h1 className="text-3xl md:text-4xl font-semibold mb-1"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <span className="font-sans"></span> Trade In
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
        >
          Upgrade and save. It’s that easy.
        </motion.p>
        <a
          href="#"
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition mb-4"
        >
          Get your estimate
        </a>
        <motion.img
          src={tradeInImage}
          alt="Trade In"
          className="w-auto max-h-[300px] object-contain mt-auto"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        />
      </div>
    </section>
  );
}



