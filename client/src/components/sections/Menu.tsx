import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MENU_ITEMS = [
  {
    category: "O Pito (Grelhado no Fogo)",
    items: [
      { name: "Pito Ardente", description: "Frango com extra piri-piri da casa, para os mais corajosos.", price: "13,50€", tag: "Especialidade" },
      { name: "Pito Chamuscado", description: "Grelhado lentamente até atingir a perfeição crocante.", price: "12,50€", tag: "Fogo" },
      { name: "Pito Clássico", description: "O tradicional frango de churrasco com o nosso molho secreto.", price: "12,00€" },
    ]
  },
  {
    category: "Acompanhamentos",
    items: [
      { name: "Batatas Fritas", description: "Caseiras, cortadas à mão, estaladiças.", price: "3,50€" },
      { name: "Arroz de Manteiga", description: "Simples e honesto.", price: "3,00€" },
      { name: "Salada Mista", description: "Para equilibrar a consciência.", price: "4,00€" },
    ]
  },
  {
    category: "Bebidas",
    items: [
      { name: "Vinho da Casa (Jarro)", description: "Tinto ou Branco, fresco e leve.", price: "8,00€" },
      { name: "Cerveja Artesanal", description: "Seleção local.", price: "4,50€" },
      { name: "Refrigerantes", description: "Os clássicos.", price: "2,50€" },
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 bg-white/50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase px-2">O Nosso Menu</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Simples, direto e delicioso. Especialidades feitas no fogo para o seu deleite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MENU_ITEMS.map((section) => (
            <Card key={section.category} className="border-2 border-border shadow-none bg-background">
              <CardHeader className="border-b border-border/10 pb-4">
                <CardTitle className="text-2xl font-black uppercase tracking-tight">
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono font-bold text-lg">{item.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      {item.tag && (
                        <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-primary text-primary uppercase">
                          {item.tag}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
