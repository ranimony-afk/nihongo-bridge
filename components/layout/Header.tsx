'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Briefcase,
  FileText,
  Mail,
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Japanese Learning',
    href: '/learn',
    children: [
      { name: 'Vocabulary', href: '/learn/vocabulary', icon: BookOpen },
      { name: 'Grammar', href: '/learn/grammar', icon: FileText },
      { name: 'Kanji', href: '/learn/kanji', icon: BookOpen },
    ],
  },
  {
    name: 'JLPT',
    href: '/jlpt',
    children: [
      { name: 'JLPT N5', href: '/jlpt/n5', icon: GraduationCap },
      { name: 'JLPT N4', href: '/jlpt/n4', icon: GraduationCap },
      { name: 'JLPT N3', href: '/jlpt/n3', icon: GraduationCap },
      { name: 'JLPT N2', href: '/jlpt/n2', icon: GraduationCap },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Study in Japan', href: '/study-in-japan' },
  { name: 'Careers', href: '/careers' },
  { name: 'Resources', href: '/resources' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'ja', name: '日本語' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-primary">日本</span>
              <span className="text-foreground"> Bridge</span>
            </span>
            <span className="ml-2 hidden sm:inline text-sm font-medium text-muted-foreground">
              Tamil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-1">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href} className="flex items-center space-x-2">
                          {child.icon && <child.icon className="h-4 w-4 text-primary" />}
                          <span>{child.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>
                    <span className="mr-2">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Contact Button */}
            <Link href="/contact">
              <Button variant="default" size="sm" className="hidden sm:flex">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="mt-2 ml-4 flex flex-col space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
