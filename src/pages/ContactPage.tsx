import { useState } from "react";
import { Content, TextField } from "../components";
import { Button } from "../components/Button";

export const ContactPage = () => {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [theme, setTheme] = useState(" ");
  const [message, setMessage] = useState(" ");

  return (
    <>
      <h1 className="container mx-auto my-8 uppercase mt-[72px] mb-[34px]">
        kontakt
      </h1>
      <figure className="h-0 pb-[45.25%] relative w-full mb-9">
        <iframe
          src="https://snazzymaps.com/embed/521927"
          className="h-[432px] left-0 absolute top-0 w-full"
        ></iframe>
      </figure>

      <Content title="Kontakt">
        <h3 className="uppercase mt-[42px] mb-[34px]">napisz wiadomość</h3>
        <form className="flex flex-wrap w-[690px] gap-y-[51px]">
          <TextField
            className="w-full"
            type="text"
            placeholder="Wpisz imię i nazwisko"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="w-50% grow mr-[15px]"
            type="email"
            placeholder="Wpisz adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="w-50% grow"
            type="tel"
            placeholder="Wpisz numer telefonu"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            className="w-full"
            type="text"
            placeholder="Wpisz temat wiadomości"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
          <TextField
            className="w-full h-[123px]"
            type="text"
            placeholder="Wpisz wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="" variant="text">
            Reset
          </Button>
          <Button className="" variant="contained">
            Dodaj
          </Button>
        </form>
      </Content>
    </>
  );
};
