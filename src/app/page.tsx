import Hero from "@/components/home/hero";
import AboveProfits from "@/components/home/above-pofits";
import KeyFocus from "@/components/home/key-focus";
import Impact from "@/components/home/impact";
import Social from "@/components/home/social";
import Partners from "@/components/home/partners";
import KeyHighlights from "@/components/home/key-highlights";
import InTheNews from "@/components/home/in-the-news";
import ContactUs from "@/components/home/contact-us";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboveProfits />
      <KeyFocus />
      <Impact />
      <KeyHighlights />
      <InTheNews />
      <Partners />
      <Social />
      <ContactUs />
    </>
  );
};

export default HomePage;
