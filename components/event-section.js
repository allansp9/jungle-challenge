import Image from "next/image";

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

export default EventSection;
