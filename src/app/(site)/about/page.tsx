import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Om oss" />
      <About />
       <Faq />
      {/* <Team /> */}
    </main>
  );
};

export default AboutPage;
