import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <DashboardPreview />
      <Services />
      <Stats />
      <Testimonials />
      <Footer />
    </>
  );
}
