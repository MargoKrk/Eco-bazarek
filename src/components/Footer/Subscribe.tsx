import { FormEvent, useState } from "react";
import { fetchSubscribe } from "../../../data/baseAPI";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { TextField } from "../index";

export const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(email) {
      try {
        await toast.promise(fetchSubscribe(email), {
          pending: "Zapisujemy Cię do newslettera",
          success: "Teraz nas subskrybujesz!",
        });
        setEmail("");
      } catch (err) {
        console.log(err);
      }
    } else toast("Wprowadź email", {type: "info"})
  };

  return (
    <>
      <form className="flex pt-[40px]" onSubmit={handleSubscribe}>
        <TextField
          className="w-[420px] mr-[26px]"
          type="email"
          placeholder="Wpisz adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <Button className="uppercase" variant="contained">
          subskrybuj
        </Button>
      </form>
    </>
  );
};
