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
    <div className="min-w-[360px]">
      <Head>
        <title>Hapu - Easily create or join a local nanny share</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <div className="px-[16px]">
        <EventSection />
        <SectionOne />
        <hr className="border border-grey88 h-0 max-w-[784px] m-auto" />
        <SectionTwo />
        <hr className="border border-grey88 h-0 max-w-[784px] m-auto" />
        <SectionThree />
        <hr className="border border-grey88 h-0 max-w-[784px] m-auto" />
        <SectionFour />
        <hr className="border border-grey88 h-0 max-w-[784px] m-auto" />
        <SectionFive />
      </div>
      <Footer />
    </div>
  );
}
