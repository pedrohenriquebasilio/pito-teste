import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 px-3 sm:px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 w-full">
        
        {/* Brand */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tighter">
            PITO DO BAIRRO
          </h2>
          <p className="text-background/70 max-w-xs text-sm sm:text-base">
            Jovem, ousado e provocador. O melhor frango grelhado que vais comer hoje.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="hover:text-primary transition-colors p-2 bg-background/10 rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 bg-background/10 rounded-full">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-background/50">
            Contactos
          </h3>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0 text-background/50" />
              <p className="text-sm sm:text-base">Rua do Bairro, 123<br />1000-001 Lisboa</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-background/50" />
              <p className="text-sm sm:text-base">+351 912 345 678</p>
            </div>
          </div>
        </div>

        {/* Legal / Copyright */}
        <div className="space-y-3 sm:space-y-4 md:text-right flex flex-col justify-between">
          <div className="hidden md:block">
            {/* Spacer */}
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-background/40">
            <p>&copy; {new Date().getFullYear()} Pito do Bairro.</p>
            <p>Todos os direitos reservados.</p>
            <div className="flex gap-4 md:justify-end pt-2">
              <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
