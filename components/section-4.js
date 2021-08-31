import Image from "next/image";
import Link from "next/link";

function SectionFour() {
  return (
    <div>
      {/* mobile */}
      <div className="block desktop:hidden py-16">
        <div>
          <h3 className="text-grey24 text-center px-[58px] mb-4">
            A framework built for the long term
          </h3>
          <p className="body-medium text-grey24 text-center mb-6">
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <p className="text-secondary text-center px-6 underline font-medium">
            <Link href="/">
              <a>Read how Hapu’s tribal background defines our app </a>
            </Link>
          </p>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden desktop:flex flex-col items-center py-24">
        <div>
          <h2 className="text-grey24 text-center px-[58px] mb-10">
            A framework built for the long term
          </h2>
          <p className="body-medium text-grey24 text-center mb-10 px-[328px]">
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <p className="text-secondary text-center underline font-medium px-6 mb-16">
            <Link href="/">
              <a>Read how Hapu’s tribal background defines our app </a>
            </Link>
          </p>
        </div>
        <div className="flex-none">
          <Image
            src="/images/ImageSection4.png"
            blurDataURL="/images/ImageSection4.png"
            alt="Section 4 Image"
            height="392"
            width="984"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
