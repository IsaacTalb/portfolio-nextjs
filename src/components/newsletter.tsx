"use client";
import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend/Strapi later
    setSubmitted(true);
  };

  return (
    <section className="my-12 p-8 bg-black text-white rounded-2xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Subscribe to the Newsletter</h2>
      <p className="mb-4 text-gray-300">Get updates, insights, and progress on the 100,000 Websites Challenge.</p>
      {submitted ? (
        <div className="text-green-400 font-semibold">Thank you for subscribing!</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="px-4 py-2 rounded bg-gray-900 text-white border border-gray-700"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}