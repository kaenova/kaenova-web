"use client";

import Testimonials from "./_components/TestimonialsSection";
import HereToHelp from "./_components/HereToHelp";
import Footer from "./_components/Footer";
import BackToTop from "./_components/BackToTop";
import ScrollProgress from "./_components/ScrollProgress";
import HeroSection from "./_components/HeroSection";
import StackIUseSection from "./_components/StackIUseSection";
import AboutMeSection from "./_components/AboutMeSection";
import ExperiencesSection from "./_components/ExperiencesSection";
import ProjectsSection from "./_components/ProjectsSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="flex items-center min-h-screen w-full flex-col bg-background">
        <div className="flex flex-col w-full max-w-5xl mb-16 px-4 gap-8">
          <HeroSection />
          <AboutMeSection />
          <StackIUseSection />
          <ExperiencesSection />
          <ProjectsSection />
          <Testimonials />
          {/* <HereToHelp /> */}
          <BackToTop />
        </div>
        <Footer />
      </main>
    </>
  );
}
