"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Is this platform appropriate for minors?",
    answer:
      "This platform is designed for users who are 18 years and older. We value the safety and well-being of our users. It is strongly advised that minors should use age-appropriate platforms for online communications.",
  },
  {
    id: "item-2",
    question: "How does the platform maintain user safety?",
    answer:
      "A 24/7 moderation system is dedicated to ensure user safety and create a secure environment for interactions.",
  },
  {
    id: "item-3",
    question: "Can I use Omegle on a global scale?",
    answer:
      "Definately, this platform allow users to make new friends around the world, experience different cultures and meet people from different walks of life.",
  },
  {
    id: "item-4",
    question: "How fast is the matching process on this platform?",
    answer:
      "The matching process on this platform is fast and easy! User can match someone seamlessly with a stable internet connection.",
  },
  {
    id: "item-5",
    question: "Is Omegle free to use?",
    answer:
      "Yes, users can use Omegle free of charge. Dive into random video chats, talk to strangers, and enjoy fun experience with cool people without any subscription fees!",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <h2 className="text-center text-4xl font-bold text-foreground mb-12">
          FAQs
        </h2>
        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className={index === faqData.length - 1 ? "border-b-0" : ""}
              >
                <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-foreground hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;