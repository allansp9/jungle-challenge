import { useState } from "react";
import axios from "axios";
import { set } from "lodash";

function SectionTwo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [error, setError] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();

    setState("LOADING");
    setError(null);

    try {
      const response = await axios.post(
        "https://api.jungledevs.com/api/v1/challenge-newsletter/",
        { name, email }
      );
      setState("SUCCESS");
      alert("Registered to newsletter with success!");

      setName("");
      setEmail("");
    } catch (e) {
      setError(e.response.data.error);
      setState("ERROR");
      alert("There was an error");
    }
  };

  return (
    <div className="py-16">
      <h3 className="text-center mb-4">
        Are you a parent without a nanny and looking to share?
      </h3>
      <p className="body-medium tablet:body-large text-center mb-8 text-grey24">
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </p>
      <form onSubmit={subscribe}>
        <div className="flex flex-col tablet:flex-row tablet:space-x-3 tablet:justify-center">
          <div className="h-[48px] border border-grey88 rounded-[4px] mb-2.5">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-5 py-3.5 body-small bg-transparent placeholder-grey24"
            />
          </div>
          <button
            type="submit"
            disabled={state === "LOADING"}
            className="h-[48px] tablet:w-[96px] rounded-[4px] bg-primary text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SectionTwo;
