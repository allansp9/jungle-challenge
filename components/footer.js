import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col items-center pt-[40px]">
      <h3 className="text-grey24 text-center desktop:hidden">
        Become a nanny share host
      </h3>
      <h2 className="text-grey24 text-center hidden desktop:inline-block mb-[16px]">
        Become a nanny share host
      </h2>
      <p className="body-medium text-grey24 text-center mb-[34px] desktop:hidden">
        Takes less than 5 minutes to get started
      </p>
      <p className="body-large text-grey24 text-center mb-[34px] hidden desktop:inline-block">
        Takes less than 5 minutes to get started
      </p>
      <button className="w-[304px] h-[68px] rounded-[4px] flex items-center justify-center gap-x-[21px] bg-secondary text-white mb-[24px]">
        <Image
          src="/images/calendar.svg"
          alt="Calendar"
          height="30"
          width="30"
        />
        <div>
          <p className="body-medium">Create Your Nanny Share</p>
          <p className="body-x-small">Takes less than 5 minutes</p>
        </div>
      </button>
      <Link href="/">
        <a className="text-secondary mb-[48px] font-medium underline">
          Or browse local nanny-shares
        </a>
      </Link>
      <div className="w-full flex flex-col items-center desktop:flex-row desktop:justify-between desktop:mb-[75px] desktop:px-[128px]">
        <Image src="/images/Logo.svg" alt="Logo" height="24" width="64" />
        <div className="flex flex-wrap justify-center mt-[32px] mb-[24px] gap-y-[17px] gap-x-[32px] px-[72px] desktop:pl-[170px]">
          <Link href="/">
            <a>
              <h5>Share Your Nanny</h5>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h5>Our Story</h5>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h5>Blog</h5>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h5>Terms & Privacy</h5>
            </a>
          </Link>
        </div>
        <div className="flex gap-x-[16px] mb-[40px] desktop:mb-0">
          <Link href="/">
            <a>
              <Image
                src="/images/Facebook.svg"
                alt="Facebook"
                height="45"
                width="45"
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/Twitter.svg"
                alt="Twitter"
                height="45"
                width="45"
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/images/Instagram.svg"
                alt="Instagram"
                height="45"
                width="45"
              />
            </a>
          </Link>
        </div>
      </div>
      <hr className="h-0 border w-[328px] mb-[24px] desktop:hidden" />
      <p className="body-x-small text-grey24 opacity-60 mb-[24px]">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </div>
  );
}

export default Footer;
