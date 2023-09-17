import { useState } from "react";
import { Content, TextAreaField, TextField } from "../components";
import { Button } from "../components/Button";
import { fetchContact } from "../../data/baseAPI";
import { toast } from "react-toastify";
import React from "react";

export const ContactPage = () => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [theme, setTheme] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const allLoadEvent = () => {
    setIsLoading(false);
  };


  const handleContact = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validErrors = [];
    const reg =
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if (!fullName || fullName.length <= 2) {
      validErrors.push("Wpisz imię i nazwisko");
    }
    if (!email) {
      validErrors.push("Wpisz email");
    }
    if (!reg.test(email)) {
      validErrors.push("Wpisz prawidłowy email");
    }
    if (!theme || theme.length <= 5) {
      validErrors.push("Wpisz temat wiadomości");
    }
    if (!message || message.length <= 10) {
      validErrors.push("Wpisz tekst wiadomości");
    }
    if (validErrors.length === 0) {
      try {
        await fetchContact(email, fullName, phone, theme, message);
        console.log(email, fullName, phone, theme, message);
      } catch (err) {
        console.log(err);
      }
    } else {
      validErrors.map((error) => toast(error, { type: "error" }));
      toast("Wypełnij wszystkie wymagane pola formularza", { type: "error" });
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setEmail("");
    setFullName("");
    setPhone("");
    setTheme("");
    setMessage("");

    console.log("klikam!");
  };

  return (
    <>
      <Content title="Kontakt" onLoadCapture={allLoadEvent} loading={isLoading}>
        <h1 className="uppercase mt-[72px] mb-[34px]">kontakt</h1>
        <figure className="h-0 pb-[432px] relative w-[100vw] mb-9 ml-[calc(50%-50vw)]">
          <iframe
            src="https://snazzymaps.com/embed/521927"
            className="h-[432px] left-0 absolute top-0 w-[100vw]"
          ></iframe>
        </figure>

        <h3 className="uppercase mt-[42px] mb-[34px]">napisz wiadomość</h3>
        <form className="grid grid-cols-1 w-[690px] gap-y-[34px] mb-[113px]">
          <TextField
            label="Imię i nazwisko"
            required={true}
            placeholder="Wpisz imię i nazwisko"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-x-[15px] gap-y-[34px]">
            <TextField
              type="email"
              label="Email"
              required={true}
              placeholder="Wpisz adres e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Telefon"
              placeholder="Wpisz numer telefonu"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="grid gap-y-[34px]">
            <TextField
              label="Temat"
              required={true}
              placeholder="Wpisz temat wiadomości"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
            <TextAreaField
              className="h-[123px]"
              label="Wiadomość"
              placeholder="Wpisz tekst wiadomości"
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-start flex-row-reverse gap-[16px]">
          <Button variant="contained" type="submit" onClick={handleContact}>
              Dodaj
            </Button>
            <Button variant="text" type="reset" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
      </Content>
    </>
  );
};
