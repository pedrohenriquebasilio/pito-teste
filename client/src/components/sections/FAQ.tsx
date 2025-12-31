import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Têm serviço de Take-Away?",
    answer: "Claro! Podes levar o pito para casa. Basta ligar ou passar cá para pedir.",
  },
  {
    question: "Há opções vegetarianas?",
    answer: "Temos saladas e acompanhamentos deliciosos, mas sejamos honestos: aqui o rei é o frango.",
  },
  {
    question: "Têm parque de estacionamento?",
    answer: "Temos estacionamento na rua. No bairro arranja-se sempre um lugarzinho.",
  },
  {
    question: "Aceitam grupos grandes?",
    answer: "Aceitamos! Mas para grupos com mais de 10 pessoas, pedimos que liguem com antecedência.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Dúvidas?</h2>
          <p className="text-muted-foreground">Perguntas frequentes sobre o nosso pito.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-lg px-4 bg-white/40">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
