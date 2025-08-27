"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => (
  <section className="relative py-32 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
    <div className="container mx-auto px-6">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Isaac Talb — <span className="text-indigo-400">Full-Stack & AI</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Bold portfolio for <span className="text-indigo-300">web</span>,{" "}
        <span className="text-indigo-300">hosting</span>,{" "}
        <span className="text-indigo-300">content</span>, and{" "}
        <span className="text-indigo-300">AI</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <Button asChild size="lg" className="px-8 py-3 text-lg font-medium">
          <Link href="/projects">🚀 See Selected Work</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="px-8 py-3 text-lg font-medium border-gray-500 hover:bg-white hover:text-black"
        >
          <Link href="/services">💡 What I Offer</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);
