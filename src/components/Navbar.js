"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {

  return (
    <nav className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                className="h-8 w-auto dark:invert"
                src="/next.svg"
                alt="Logo"
                width={100}
                height={24}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 