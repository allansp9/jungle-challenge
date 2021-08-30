import Head from "next/head";

import Hero from "../components/hero";
import EventSection from "../components/event-section";
import SectionOne from "../components/section-1";
import SectionTwo from "../components/section-2";
import SectionThree from "../components/section-3";
import SectionFour from "../components/section-4";
import SectionFive from "../components/section-5";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Hapu - Easily create or join a local nanny share</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <EventSection />
      <SectionOne />
      <hr className="border-2 border-grey88 h-0" />
      <SectionTwo />
      <hr className="border-2 border-grey88 h-0" />
      <SectionThree />
      <hr className="border-2 border-grey88 h-0" />
      <SectionFour />
      <hr className="border-2 border-grey88 h-0" />
      <SectionFive />
      <Footer />
    </div>
  );
}
