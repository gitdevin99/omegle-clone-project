"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

const BottomNavigation = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-white shadow-[0_-1px_5px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23deb8c8-ae3b-47f7-882c-d1dfe8791dd9-omegle-fun/assets/images/logo-eLnZRYte-1.png"
              alt="Omegle logo"
              width={105}
              height={30}
              className="h-8 w-auto"
            />
          </a>
          <div className="ml-2 flex items-baseline gap-x-3 sm:ml-4">
            <p className="hidden text-xs font-medium italic text-text-primary sm:block">
              Talk to strangers!
            </p>
            <p className="whitespace-nowrap text-sm font-bold text-primary">
              26423 Online Now
            </p>
          </div>
        </div>
        <button
          aria-label="Open menu"
          className="rounded-md p-2 text-text-primary transition-colors hover:bg-muted"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default BottomNavigation;