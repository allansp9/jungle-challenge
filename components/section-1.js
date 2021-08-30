import Image from "next/image";

function SectionOne() {
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

export default SectionOne;
