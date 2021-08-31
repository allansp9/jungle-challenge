import Image from "next/image";
import Link from "next/link";

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
    <nav className="text-white pb-[92px] pl-[16px]">
      <div className="flex justify-between">
        <div className="flex space-x-8 items-center">
          <Image
            src="/images/badge.svg"
            alt="Badge"
            height="64"
            width="48"
            priority={true}
          />

          <div className="mt-2 flex space-x-8">
            <div className="h-11 items-center hidden laptop:flex">
              <h5>
                <Link href="/">
                  <a>Create Your Nanny Share</a>
                </Link>
              </h5>
            </div>
            <div className="h-11 items-center hidden laptop:flex">
              <h5>
                <Link href="/">
                  <a>Browse Shares</a>
                </Link>
              </h5>
            </div>
            <div className="h-11 items-center hidden laptop:flex">
              <h5>
                <Link href="/">
                  <a>Our Story</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 pr-[16px] tablet:pr-8 items-center mt-2">
          <button className="hero-btn bg-primary flex justify-center items-center">
            <h5>Become a Nanny Share Host</h5>
          </button>
          <div className="h-11 items-center hidden tablet:flex">
            <h5>
              <Link href="/">
                <a>Sign In</a>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroText() {
  return (
    <div className="tablet:pl-28">
      <Experiment name="heroSectionExperiment">
        <Variant name="control">
          <h1 className="hidden text-white tablet:inline-block w-[490px] pb-6">
            Easily create or join a local nanny share with Hapu
          </h1>

          <h2 className="tablet:hidden text-white text-center mb-4">
            Easily create or join a local nanny share with Hapu
          </h2>

          <h3 className="body-medium text-white text-center mb-[66px] tablet:body-large tablet:text-left tablet:w-[584px] tablet:mr-[184px] tablet:mb-10">
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </h3>
        </Variant>

        <Variant name="variant">
          <h1 className="hidden text-white tablet:inline-block w-[490px] pb-6">
            Create the childcare you need at a price you can afford
          </h1>

          <h2 className="tablet:hidden text-white text-center mb-4">
            Create the childcare you need at a price you can afford
          </h2>

          <h3 className="body-medium text-white text-center mb-[66px] tablet:body-large tablet:text-left tablet:w-[584px] tablet:mr-[184px] tablet:mb-10">
            Connect with other local families to share a nanny from as low as
            $10.00/hr each. Create your family profile today to get started.
          </h3>
        </Variant>
      </Experiment>
      <div className="flex items-center justify-center">
        <div className="pr-4">
          <Image
            src="/images/play.svg"
            alt="Play Button"
            height="48"
            width="48"
            priority={true}
          />
        </div>
        <Link href="/">
          <a className="text-white underline font-inter">
            See hapu in action (27 seconds)
          </a>
        </Link>
      </div>
    </div>
  );
}

function Hero() {
  return (
    // hero wrapper
    <div className="hero-wrapper relative h-[540px] desktop:h-[616px] overflow-hidden">
      {/* hero bg */}

      {/* <Image
        src="/images/herobg-mobile.png"
        alt="Hero background Image"
        blurDataURL="/images/herobg-mobile.png"
        placeholder="blur"
        height="540"
        width="360"
        layout="responsive"
        objectPosition="center"
        objectFit="cover"
        className="visible desktop:invisible opacity-80 mix-blend-overlay"
      /> */}

      <Image
        src="/images/Image@3x.png"
        alt="Hero background Image"
        // height="1848"
        // width="4320"
        layout="fill"
        quality="50"
        priority={true}
        objectFit="cover"
        objectPosition="center top"
        className=""
      />

      {/* hero content */}
      <div className="absolute top-0 z-1 w-full">
        <Header />
        <div className="flex px-[16px]">
          <HeroText />
          <div className="hidden laptop:block">
            <Image
              src="/images/ImageHeader.png"
              alt="Hero Image"
              priority={true}
              height="290"
              width="316"
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
