import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { Takeaway } from "@/components/sections/Takeaway";
import { Reservation } from "@/components/sections/Reservation";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Takeaway />
        <Reservation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
