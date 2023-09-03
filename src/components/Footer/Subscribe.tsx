import { FormEvent, useState } from "react";
import { HOST } from "../../../data/data";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { TextField } from "../index";

export const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const notify = () => toast("now you are subscribing us");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({email})
    
    fetch(HOST, {
        method: "POST",
        body: JSON.stringify({email}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if(response.ok) {
            console.log("now you are subscribing it")
            setEmail(" ")
            notify()
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
        <TextField type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></TextField>
        <Button variant={"contained"}>subskrybuj</Button>
      </form>
    </>
  );
};
