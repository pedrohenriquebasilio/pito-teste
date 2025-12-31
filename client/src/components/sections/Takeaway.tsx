import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Takeaway() {
  return (
    <section id="takeaway" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 bg-secondary overflow-x-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-background rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 lg:p-16 border-2 border-border shadow-2xl relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-5 pointer-events-none hidden sm:block">
            <MessageCircle className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rotate-12" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block bg-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                Sem Filas, Sem Espera
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-tight">
                Takeaway via WhatsApp
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Encomende Já! O Takeaway é um serviço de encomendas feito através do WhatsApp, onde notificamos os clientes em cada etapa do processo para que não tenham de esperar em filas.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 bg-secondary/30 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border/50">
              <div className="text-center">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Simples e Rápido</p>
                <p className="text-base sm:text-lg font-medium">Receba notificações em tempo real</p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full text-base sm:text-lg md:text-xl py-6 sm:py-7 md:py-8 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/351912345678', '_blank')}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:scale-110 transition-transform" />
                Encomendar Agora!
              </Button>
              
              <p className="text-[10px] sm:text-xs text-center opacity-50 px-2">
                Disponível Terça a Domingo, das 12h às 23h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
