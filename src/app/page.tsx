import Header from "@/components/sections/header";
import MainChatInterface from "@/components/sections/main-chat-interface";
import HeroVideoSection from "@/components/sections/hero-video-section";
import TalkToStrangersContent from "@/components/sections/talk-to-strangers-content";
import FeaturesSection from "@/components/sections/features-section";
import FaqSection from "@/components/sections/faq-section";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-20">
        <div className="container mx-auto px-5 py-8">
          <MainChatInterface />
        </div>
        
        <HeroVideoSection />
        
        <TalkToStrangersContent />
        
        <FeaturesSection />
        
        <FaqSection />
        
        <CtaSection />
        
        <Footer />
      </main>
      
      <BottomNavigation />
    </div>
  );
}