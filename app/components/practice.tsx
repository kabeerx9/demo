"use client";

import { motion } from "motion/react";
import { useState } from "react";

// Hamburger icon variants
const topLineVariants = {
  closed: {
    rotate: 0,
    y: -8,
  },
  open: {
    rotate: 45,
    y: 0,
  },
};

const middleLineVariants = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};

const bottomLineVariants = {
  closed: {
    rotate: 0,
    y: 8,
  },
  open: {
    rotate: -45,
    y: 0,
  },
};

// Menu panel variants - slides in from left
const menuVariants = {
  closed: {
    x: "-100%",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse stagger when closing
    },
  },
  open: {
    x: 0,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
      delayChildren: 0.2, // Wait before starting children animations
    },
  },
};

// Menu item variants - stagger in with fade and slide
const itemVariants = {
  closed: {
    opacity: 0,
    x: -50,
  },
  open: {
    opacity: 1,
    x: 0,
  },
};

const menuItems = ["Home", "About", "Projects", "Blog", "Contact"];

export default function Practice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-black relative overflow-hidden">
      {/* Hamburger button - fixed top left */}
      <motion.button
        className="fixed top-6 left-6 z-50 w-12 h-12 flex items-center justify-center cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Top line */}
        <motion.span
          className="absolute w-8 h-0.5 bg-white rounded-full"
          variants={topLineVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Middle line */}
        <motion.span
          className="absolute w-8 h-0.5 bg-white rounded-full"
          variants={middleLineVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />

        {/* Bottom line */}
        <motion.span
          className="absolute w-8 h-0.5 bg-white rounded-full"
          variants={bottomLineVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.button>

      {/* Menu panel */}
      <motion.nav
        className="fixed top-0 left-0 h-full w-80 bg-zinc-800/95 backdrop-blur-lg z-40 shadow-2xl"
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      >
        <div className="pt-24 px-8">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              className="block py-4 text-white text-xl font-medium hover:text-zinc-300 transition-colors"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Overlay backdrop */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
