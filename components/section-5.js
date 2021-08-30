import Image from "next/image";

function SectionFive() {
  return (
    <div className="py-16 flex flex-col items-center desktop:pt-[96px] desktop:pb-[120px]">
      <div className="flex-none mb-[24px] desktop:mb-[40px]">
        <Image
          src="/images/ImageSection5.png"
          alt="Section 5 Image"
          height="96"
          width="216"
        />
      </div>
      <h3 className="text-grey24 text-center px-[16px] mb-[16px] desktop:hidden">
        Coming soon: Nanny Share Daily Diary!
      </h3>
      <h2 className="hidden desktop:inline-block text-grey24 text-center px-[16px] mb-[40px]">
        Coming soon: Nanny Share Daily Diary!
      </h2>
      <p className="text-grey24 text-center px-[16px] desktop:px-[328px]">
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </div>
  );
}

export default SectionFive;
