"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <>
    <Fade duration={2000}>
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pristabell"
            title="Vår prisplan"
            paragraph="Hos Innoscribe forstår vi at hver virksomhet har unike behov. Derfor tilbyr vi fleksible
prisplaner for våre AI-løsninger, slik at du kan finne den perfekte løsningen som passer både
budsjettet og målene dine."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div>
      </div>
    </section>
    </Fade>
    </>
  );
};

export default Pricing;
