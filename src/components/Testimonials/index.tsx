"use client";
import { Fade } from "react-awesome-reveal";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Saboor Masties",
    designation: "Founder @ Techware Inc.",
    content:
      "Siden vi implementerte Innoscribes AI chatbots, har responstiden vår for kundeservice sunket med 50 %! GPT-teknologien deres lar chatbotene håndtere de fleste henvendelser, og frigjør agentene våre for mer komplekse problemer. - Saboor M, Customer Success Manager hos Techware Inc.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Manager @  GreenTech Solutions",
    content:
      "Innoscribe utviklet en tilpasset AI-assistent for selskapet vårt, og det har forandret spillet! Den automatiserer så mange daglige oppgaver, sparer oss verdifull tid og øker produktiviteten. Våre ansatte elsker det brukervennlige grensesnittet. - Margin G., administrerende direktør i GreenTech Solutions",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Founder @  Star Logistics",
    content:
      "Vi samarbeidet med Innoscribe for å lage en mobilapp som effektiviserer vår interne kommunikasjon. Utviklingsteamet deres var utrolig effektivt og forsto visjonen vår perfekt. Appen har forbedret samarbeidet i vår organisasjon betydelig. - William S., driftsdirektør i Star Logistics",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <>
    <Fade duration={2000}>
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Real Results with Innoscribe AI"
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
    </Fade>
    </>
  );
};

export default Testimonials;
