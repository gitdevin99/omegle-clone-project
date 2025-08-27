import Image from "next/image";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background">
      <div className="container flex h-[88px] items-center justify-between">
        {/* Left side: Logo and Tagline */}
        <div className="flex items-center gap-4">
          <a href="/">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23deb8c8-ae3b-47f7-882c-d1dfe8791dd9-omegle-fun/assets/images/logo-eLnZRYte-1.png"
              alt="Omegle"
              width={175}
              height={40}
              className="shrink-0"
              priority
            />
          </a>
          <p className="hidden shrink-0 font-heading text-[22px] font-bold text-text-primary -skew-x-12 md:block">
            Talk to strangers!
          </p>
        </div>
        
        {/* Right side: Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 font-semibold text-primary-foreground">
            <Download size={18} />
            <span>Install</span>
          </button>
          <button className="h-10 rounded-md bg-secondary px-6 font-semibold text-secondary-foreground">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;