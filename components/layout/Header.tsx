'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu, Sun, Moon, ChevronDown } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-2xl font-bold kanji-text text-primary">日本語</span>
            <span className="text-lg font-bold text-foreground hidden sm:inline">Bridge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground flex items-center space-x-0.5 ${
                        pathname.startsWith(link.href) ? 'text-primary' : 'text-foreground/70'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href={link.href} className="font-semibold text-primary">
                        {link.name} Overview
                      </Link>
                    </DropdownMenuItem>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href} className="flex items-center space-x-2">
                          {child.icon && <child.icon className="h-4 w-4 text-muted-foreground" />}
                          <span>{child.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                    pathname === link.href ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 transition-all rotate-0 scale-100" />
                ) : (
                  <Moon className="h-5 w-5 transition-all rotate-0 scale-100" />
                )}
              </Button>
            )}
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/learn">Start Learning</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <span className="text-2xl font-bold kanji-text text-primary">日本語</span>
                    <span className="text-lg font-bold text-foreground ml-1">Bridge</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link) =>
                    link.children ? (
                      <div key={link.name} className="space-y-1">
                        <Link
                          href={link.href}
                          className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center space-x-2 pl-6 pr-3 py-1.5 text-sm text-muted-foreground hover:bg-accent rounded-md"
                            onClick={() => setOpen(false)}
                          >
                            {child.icon && <child.icon className="h-4 w-4" />}
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent ${
                          pathname === link.href ? 'text-primary bg-primary/5' : 'text-foreground'
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
