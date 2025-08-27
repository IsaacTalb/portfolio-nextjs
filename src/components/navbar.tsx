"use client";
import Link from "next/link";
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container-tight flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">ISAAC</Link>
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem><Link href="/services">Services</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="/projects">Work</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="/blog">Insights</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="/contact">Contact</Link></NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Work</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Insights</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};
