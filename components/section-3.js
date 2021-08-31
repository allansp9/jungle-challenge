import Image from "next/image";
import Link from "next/link";

function SectionThree() {
  return (
    <div className="py-16 px-[16px] items-center tablet:py-24 laptop:flex laptop:gap-x-11 laptop:justify-center">
      <div className="flex justify-center flex-none tablet:mb-[40px]">
        <Image
          src="/images/ImageSection3.png"
          alt="Section 3 Image"
          height="336"
          width="456"
          layout="intrinsic"
          className=""
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="hidden laptop:inline-block text-grey24 mb-[40px]">
          Shared payments made simple
        </h2>
        <h3 className="text-center px-[67px] mt-10 mb-4 text-grey24 laptop:hidden">
          Shared payments made simple
        </h3>
        <p className="body-medium text-grey24 text-center mb-6 laptop:text-left max-w-[484px]">
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
          that bill week in, week out and you might encounter more than a few
          snares. But not with Hapu. Simply set your rates and our automated
          payment system takes care of the rest. You need never talk money or
          who owes what.
        </p>

        <p className="text-secondary underline font-medium text-center tablet:text-left">
          <Link href="/">
            <a>Read how Bridget’s share (without Hapu) ended over $15</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SectionThree;
