import Image from "next/image";

import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger,
} from "@marvelapp/react-ab-test";

emitter.defineVariants(
  "heroSectionExperiment",
  ["control", "variant"],
  [50, 50]
);

function Header() {
  return (
    <nav className="text-white pb-[92px]">
      <div className="flex justify-between">
        <div className="flex space-x-8 items-center">
          <Image src="/images/badge.svg" alt="Badge" height="64" width="48" />

          <div className="mt-2 flex space-x-8">
            <div className="h-11 items-center hidden desktop:flex">
              <h5>Create Your Nanny Share</h5>
            </div>
            <div className="h-11 items-center hidden desktop:flex">
              <h5>Browse Shares</h5>
            </div>
            <div className="h-11 items-center hidden desktop:flex">
              <h5>Our Story</h5>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 desktop:pr-8 items-center mt-2">
          <div className="hero-btn bg-primary flex justify-center items-center">
            <h5>Become a Nanny Share Host</h5>
          </div>
          <div className="h-11 items-center hidden desktop:flex">
            <h5>Sign In</h5>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroText() {
  return (
    <div className="desktop:pl-28">
      <Experiment name="heroSectionExperiment">
        <Variant name="control">
          <h1 className="hidden text-white desktop:inline-block w-[490px] pb-6">
            Easily create or join a local nanny share with Hapu
          </h1>

          <h2 className="desktop:hidden text-white text-center mb-4">
            Easily create or join a local nanny share with Hapu
          </h2>

          <h3 className="body-medium text-white text-center mb-[66px] desktop:body-large desktop:text-left desktop:w-[584px] desktop:mr-[184px] desktop:mb-10">
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </h3>
        </Variant>

        <Variant name="variant">
          <h1 className="hidden text-white desktop:inline-block w-[490px] pb-6">
            Create the childcare you need at a price you can afford
          </h1>

          <h2 className="desktop:hidden text-white text-center mb-4">
            Create the childcare you need at a price you can afford
          </h2>

          <h3 className="body-medium text-white text-center mb-[66px] desktop:body-large desktop:text-left desktop:w-[584px] desktop:mr-[184px] desktop:mb-10">
            Connect with other local families to share a nanny from as low as
            $10.00/hr each. Create your family profile today to get started.
          </h3>
        </Variant>
      </Experiment>
      <div className="flex items-center">
        <div className="pr-4">
          <Image
            src="/images/play.svg"
            alt="Play Button"
            height="48"
            width="48"
          />
        </div>
        <a href="http://" className="text-white">
          See hapu in action (27 seconds)
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    // hero wrapper
    <div className="hero-wrapper px-4 h-[540px] desktop:h-[616px] overflow-hidden relative">
      {/* hero bg */}
      <Image
        src="/images/herobg-desktop.png"
        alt="Hero background Image"
        // height="616"
        // width="1440"
        layout="fill"
        objectPosition="center"
        objectFit="cover"
        className="invisible desktop:visible hero-bg"
      />
      <Image
        src="/images/herobg-mobile.png"
        alt="Hero background Image"
        // height="616"
        // width="1440"
        layout="fill"
        objectPosition="center"
        objectFit="cover"
        className="visible desktop:invisible opacity-80 mix-blend-overlay"
      />

      {/* hero content */}
      <div className="relative">
        <Header />
        <div className="flex">
          <HeroText />
          <div className="hidden desktop:block">
            <Image
              src="/images/ImageHeader.png"
              alt="Hero Image"
              height="290"
              width="316"
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
