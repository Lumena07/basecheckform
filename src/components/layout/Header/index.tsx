import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';

export const Header = () => {
  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};