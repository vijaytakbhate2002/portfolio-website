import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ResumeSection from "@/components/resume-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import FuturePlansSection from "@/components/future-plans-section";
import YouTubeSection from "@/components/youtube-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";

const Home = () => {
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const sections = ['home', 'resume', 'projects', 'experience', 'skills', 'future', 'youtube', 'contact'];
  const activeSection = useScrollSpy(sections, { offset: 100 });

  useEffect(() => {
    const handleScroll = () => {
      if (backToTopRef.current) {
        if (window.pageYOffset > 300) {
          backToTopRef.current.classList.remove("hidden");
        } else {
          backToTopRef.current.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <FuturePlansSection />
      <YouTubeSection />
      <ContactSection />
      <Footer />
      
      <Button
        ref={backToTopRef}
        onClick={scrollToTop}
        size="icon"
        variant="default"
        className={cn(
          "fixed bottom-6 right-6 rounded-full shadow-lg shadow-primary/20 z-50 hidden"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Home;
