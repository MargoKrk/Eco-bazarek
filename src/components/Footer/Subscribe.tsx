import { FormEvent, useState } from "react";
import { HOST } from "../../../data/baseAPI";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { TextField } from "../index";

export const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast("Zapisujemy Cię do newslettera!");

    console.log({ email });

    fetch(HOST + "/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (email) {
          console.log("now you are subscribing us!");
          setEmail(" ");
          toast("Teraz nas subskrybujesz!");
          return response.json();
        }
      })
      .catch((error) => {
        console.error(error);
        toast("Niepoprawny e-mail");
      });
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
