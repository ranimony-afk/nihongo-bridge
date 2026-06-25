'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

const footerLinks = {
  learning: [
    { name: 'Japanese Vocabulary', href: '/learn/vocabulary' },
    { name: 'Grammar Lessons', href: '/learn/grammar' },
    { name: 'Kanji Studies', href: '/learn/kanji' },
    { name: 'JLPT Preparation', href: '/jlpt' },
  ],
  resources: [
    { name: 'Study in Japan', href: '/study-in-japan' },
    { name: 'Career Opportunities', href: '/careers' },
    { name: 'Resources Library', href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">日本</span>
                <span className="text-foreground"> Bridge</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Your bridge to Japan. Learn Japanese, prepare for JLPT, discover study
              abroad opportunities, and explore career paths in Japan.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 text-primary" />
              <span>India | Tokyo, Japan</span>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Learning Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Learning</h3>
            <ul className="space-y-3">
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

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
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

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
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

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Subscribe to Newsletter
              </h3>
              <p className="text-sm text-muted-foreground">
                Get Japanese learning tips, career updates, and study opportunities
                delivered weekly.
              </p>
            </div>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Japan Bridge Tamil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
