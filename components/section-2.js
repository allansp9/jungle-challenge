function SectionTwo() {
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

export default SectionTwo;
