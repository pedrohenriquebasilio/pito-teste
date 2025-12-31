import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/portuguese_grilled_chicken_hero_image.png";

export function Hero() {
  const scrollToReservations = () => {
    const element = document.querySelector("#reservations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Layer: Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Frango de churrasco"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Layer: Semi-transparent "Smoky" Brown */}
      <div className="absolute inset-0 z-10 bg-primary/85 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-primary/40 backdrop-blur-[2px]" />

      {/* Content Layer */}
      <div className="container relative z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-block border-2 border-primary-foreground/30 px-4 py-1 rounded-full bg-white/5 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
              O autêntico frango de churrasco
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-primary-foreground drop-shadow-2xl">
            VAIS AO PITO<br />HOJE?
          </h1>
          
          <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="text-lg md:text-xl font-medium max-w-sm text-primary-foreground/90 text-center md:text-left leading-tight">
              Direto, sem vergonha e inesquecível. O frango que o bairro merece.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToReservations}
              className="text-lg px-10 py-8 rounded-full border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground transition-all duration-300 shadow-2xl font-black uppercase tracking-widest"
            >
              Fazer Reserva
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Marquee Layer */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden z-20 opacity-30 pointer-events-none">
        <div className="whitespace-nowrap flex animate-marquee">
          {Array(10).fill("PITO DO BAIRRO • ").map((text, i) => (
            <span key={i} className="text-9xl font-display font-black text-transparent stroke-text-light mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
