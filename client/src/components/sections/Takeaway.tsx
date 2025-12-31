import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Takeaway() {
  return (
    <section id="takeaway" className="py-24 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="bg-background rounded-3xl p-8 md:p-16 border-2 border-border shadow-2xl relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <MessageCircle className="w-64 h-64 rotate-12" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Sem Filas, Sem Espera
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
                Takeaway via WhatsApp
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Encomende Já! O Takeaway é um serviço de encomendas feito através do WhatsApp, onde notificamos os clientes em cada etapa do processo para que não tenham de esperar em filas.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 bg-secondary/30 p-8 rounded-2xl border border-border/50">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Simples e Rápido</p>
                <p className="text-lg font-medium">Receba notificações em tempo real</p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full text-xl py-8 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/351912345678', '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                Encomendar Agora!
              </Button>
              
              <p className="text-xs text-center opacity-50">
                Disponível Terça a Domingo, das 12h às 23h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
