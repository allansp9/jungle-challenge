import Image from "next/image";

function SectionThree() {
  return (
    <div className="py-16 desktop:py-24 desktop:flex desktop:px-[228px] desktop:gap-x-11">
      <div className="desktop:hidden">
        <Image
          src="/images/ImageSection3.png"
          alt="Section 3 Image"
          height="230"
          width="312"
        />
      </div>
      <div className="hidden desktop:block flex-none">
        <Image
          src="/images/ImageSection3.png"
          alt="Section 3 Image"
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

export default SectionThree;
