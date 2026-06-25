'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Youtube, Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  learning: [
    { name: 'Vocabulary', href: '/learn/vocabulary' },
    { name: 'Grammar', href: '/learn/grammar' },
    { name: 'Kanji', href: '/learn/kanji' },
    { name: 'Conversation', href: '/learn/conversation' },
    { name: 'Business Japanese', href: '/learn/business-japanese' },
  ],
  resources: [
    { name: 'JLPT N5', href: '/jlpt/n5' },
    { name: 'JLPT N4', href: '/jlpt/n4' },
    { name: 'JLPT N3', href: '/jlpt/n3' },
    { name: 'Study in Japan', href: '/study-in-japan' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Japanese Jobs', href: '/careers' },
    { name: 'Culture', href: '/culture' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      {/* Newsletter Section */}
      <div className="japan-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join the Nihongo Bridge Community
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Receive Japanese vocabulary, grammar tips, JLPT resources, and study abroad insights
              directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
                aria-label="Email address"
              />
              <Button size="lg" variant="secondary" className="sm:w-auto w-full">
                Subscribe Free
              </Button>
            </form>
            <p className="text-sm opacity-70 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold kanji-text text-primary">日本語</span>
              <span className="text-lg font-bold text-foreground">Bridge</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Learn Japanese • Study in Japan • Build Your Career. Your bridge to mastering Japanese
              language and building a future in Japan.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Learning</h3>
            <ul className="space-y-2">
              {footerLinks.learning.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Nihongo Bridge. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              hello@nihongobridge.com
            </span>
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              India × Japan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
