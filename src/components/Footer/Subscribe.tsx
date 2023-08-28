import { FormEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { HOST } from "../../../data/data";

export const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emailAddress = {email};

    console.log(emailAddress)

    fetch(HOST, {
        method: "POST",
        body: JSON.stringify(emailAddress),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if(response.ok) {
            console.log("now you are subscribing it")
            return response.json()
        }
        throw Error(`${response.status} - ${response.statusText}`);
    }).catch(error => {
        console.error(error)
    });
};


  return (
    <>
      <form className="pt-[40px]" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[420px] h-[42px] mr-[26px] text-black"
        ></input>
        <button className="uppercase bg-[#46AA42] px-6 h-[42px]">
          subskrybuj
        </button>
      </form>
    </>
  );
};
