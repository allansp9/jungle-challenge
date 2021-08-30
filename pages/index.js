import Head from "next/head";
import Image from "next/image";

function PaymentSection() {
  return (
    <div className="py-16 desktop:py-24 desktop:flex desktop:px-[228px] desktop:gap-x-11">
      <div className="desktop:hidden">
        <Image
          src="/images/ImageSection3.png"
          alt="Section 1 Image"
          height="230"
          width="312"
        />
      </div>
      <div className="hidden desktop:block flex-none">
        <Image
          src="/images/ImageSection3.png"
          alt="Section 1 Image"
          height="336"
          width="456"
        />
      </div>

      <div>
        <h3 className="text-center px-[67px] mt-10 mb-4 text-grey24">
          Shared payments made simple
        </h3>
        <p className="body-medium text-grey24 text-center mb-6">
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
          that bill week in, week out and you might encounter more than a few
          snares. But not with Hapu. Simply set your rates and our automated
          payment system takes care of the rest. You need never talk money or
          who owes what.
        </p>
        <p className="text-secondary text-center">
          <a href="">Read how Bridget’s share (without Hapu) ended over $15</a>
        </p>
      </div>
    </div>
  );
}

function EmailSection() {
  return (
    <div className="px-4 py-16">
      <h3 className="text-center mb-4">
        Are you a parent without a nanny and looking to share?
      </h3>
      <p className="body-medium text-center mb-8">
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </p>
      <form action="">
        <div className="flex flex-col desktop:flex-row desktop:space-x-3 desktop:justify-center">
          <div className="h-[48px] border border-grey88 rounded-[4px] mb-2.5">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="pl-5 py-3.5 body-small bg-transparent placeholder-grey24"
            />
          </div>
          <div className="h-[48px] border border-grey88 rounded-[4px] mb-[18px]">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="pl-5 py-3.5 body-small bg-transparent placeholder-grey24"
            />
          </div>
          <button
            type="submit"
            className="h-[48px] desktop:w-[96px] rounded-[4px] bg-primary text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

function Section1() {
  return (
    <div>
      {/* mobile */}
      <div className="desktop:hidden py-16 px-4 text-center">
        <div className="">
          <Image
            src="/images/ImageSection1.png"
            alt="Section 1 Image"
            height="204"
            width="304"
          />
        </div>
        <div className="">
          <h3 className="text-grey24 text-center px-[71px] mt-6 mb-4">
            Share your home, nanny and costs
          </h3>
          <p className="body-medium text-center mb-6">
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu.{" "}
            <a href="http://" className="text-secondary">
              Hapu means tribe
            </a>{" "}
            and it’s our foundational 3 tribal principles that empowers you to
            create and manage your own tribe. A tribe that together has the
            power to create new affordable solutions in childcare that work for
            you and your community.
          </p>
          <a href="http://" className="text-secondary">
            Ready to get started?
          </a>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden desktop:flex px-32 py-[120px]">
        <div className="mr-14">
          <h2 className="text-grey24">
            Share your home, <br />
            nanny and costs
          </h2>
          <p className="body-medium my-10 w-[444px]">
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu.{" "}
            <a href="http://" className="text-secondary">
              Hapu means tribe
            </a>{" "}
            and it’s our foundational 3 tribal principles that empowers you to
            create and manage your own tribe. A tribe that together has the
            power to create new affordable solutions in childcare that work for
            you and your community.
          </p>
          <a href="http://" className="text-secondary">
            Ready to get started?
          </a>
        </div>
        <div className="flex-none">
          <Image
            src="/images/ImageSection1.png"
            alt="Section 1 Image"
            height="392"
            width="584"
          />
        </div>
      </div>
    </div>
  );
}

function EventSection() {
  return (
    <div className="flex flex-col items-center py-8 border-b border-grey88 bg-white desktop:flex-row desktop:justify-center desktop:py-7">
      <div className="desktop:pr-8">
        <Image
          src="/images/ProfileImage.png"
          alt="Profile Image"
          height="56"
          width="56"
          className="rounded-full dp1"
        />
      </div>
      <a
        href="http://"
        className="text-secondary px-[74px] my-3 text-center desktop:p-0"
      >
        Sarah’s day care available now in North Sydney
      </a>
      <h4 className="hidden desktop:inline-block">
        Wednesday, Thursday, Friday - 7:30 - 5:30
      </h4>
      <h5 className="desktop:hidden">
        Wednesday, Thursday, Friday - 7:30 - 5:30
      </h5>
    </div>
  );
}

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

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Easily create or join a local nanny share with Hapu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <EventSection />
      <Section1 />
      <hr className="border-2 border-grey88 h-0" />
      <EmailSection />
      <hr className="border-2 border-grey88 h-0" />
      <PaymentSection />
      <hr className="border-2 border-grey88 h-0" />
    </div>
  );
}
