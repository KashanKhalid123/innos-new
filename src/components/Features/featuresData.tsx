import { Feature } from "@/types/feature";
import { RiVoiceprintFill } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";
import { IoIosChatboxes } from "react-icons/io";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <SiChatbot className="h-12 w-12" />
    ),
    title: "GPT-drevne AI Chatbots",
    paragraph: "  Øk kundeservicen din med Innoscribes GPT-drevne AI chatbots.  Disse intelligente chatbotene engasjerer seg med kundene dine 24/7, svarer på spørsmålene deres og gir sanntidsstøtte.  Drevet av GPT-teknologi lærer chatbotene våre og tilpasser seg brukerinteraksjoner, og tilbyr en personlig og effektiv kundeopplevelse.",
    btn: "Kom i gang",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
  {
    id: 2,
    icon: (
      <RiVoiceprintFill className="h-12 w-12" />
    ),
    title: "AI Voice Calling Assistants",
    paragraph: "Se for deg en verden der teknologi sømløst integreres i hverdagen din.  Innoscribes AI-stemmeassistenter bringer denne visjonen til virkelighet.  Våre spesialbygde assistenter forstår naturlig språk, svarer på dine spørsmål og forespørsler, og automatiserer oppgaver, noe som gjør livet ditt enklere og mer produktivt.",
    btn: "Kom i gang",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
  {
    id: 3,
    icon: (
      <SiBmcsoftware className="h-12 w-12" />
    ),
    title: "Programvare utvikling",
    paragraph: "Innoscribes programvareutviklingsteam består av lidenskapelige og dyktige ingeniører som lager innovative programvareløsninger som er skreddersydd for dine spesifikke behov. Enten du trenger tilpassede applikasjoner, enterprise-programvareintegrering eller utvikling av mobilapper, har vi ekspertisen til å bringe din visjon til live.",
    btn: "Kom i gang",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
  {
    id: 3,
    icon: (
      <IoIosChatboxes  className="h-12 w-12" />
    ),
    title: "AI Agentutvikling",
    paragraph: "Innoscribes programvareutviklingsteam består av lidenskapelige og dyktige ingeniører som lager innovative programvareløsninger som er skreddersydd for dine spesifikke behov. Enten du trenger tilpassede applikasjoner, enterprise-programvareintegrering eller utvikling av mobilapper, har vi ekspertisen til å bringe din visjon til live.",
    btn: "Kom i gang",
    btnLink: "https://calendly.com/kashankhalid429/30min",
  },
];
export default featuresData;
