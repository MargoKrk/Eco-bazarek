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
      <figure className="h-0 pb-[432px] relative w-full mb-9">
        <iframe
          src="https://snazzymaps.com/embed/521927"
          className="h-[432px] left-0 absolute top-0 w-full"
        ></iframe>
      </figure>

      <Content title="Kontakt">
        <h3 className="uppercase mt-[42px] mb-[34px]">napisz wiadomość</h3>
        <form className="flex flex-col w-[690px] gap-y-[34px] mb-[113px]">
          <TextField
            className="w-full"
            classNameDiv="w-full"
            type="text"
            label="Imię i nazwisko*"
            placeholder="Wpisz imię i nazwisko"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex gap-x-[15px]">
            <TextField
              classNameDiv="w-50% grow"
              className="w-full"
              type="email"
              label="Email*"
              placeholder="Wpisz adres e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              classNameDiv="w-50% grow"
              className="w-full"
              type="tel"
              label="Telefon*"
              placeholder="Wpisz numer telefonu"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <TextField
            classNameDiv="w-full"
            className="w-full"
            type="text"
            label="Temat*"
            placeholder="Wpisz temat wiadomości"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
          <TextField
            classNameDiv="w-full"
            className="w-full h-[123px]"
            type="text"
            label="Wiadomość*"
            placeholder="Wpisz wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-end">
            <Button className="" variant="text">
              Reset
            </Button>
            <Button className="" variant="contained">
              Dodaj
            </Button>
          </div>
        </form>
      </Content>
    </>
  );
};
