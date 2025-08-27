import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: process.env.NEXT_PUBLIC_SITE_URL!, changeFrequency: "weekly", priority: 1 },
    { url: `${process.env.NEXT_PUBLIC_SITE_URL!}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${process.env.NEXT_PUBLIC_SITE_URL!}/services`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${process.env.NEXT_PUBLIC_SITE_URL!}/blog`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${process.env.NEXT_PUBLIC_SITE_URL!}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];
}