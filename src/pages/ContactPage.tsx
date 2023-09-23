import { FormEvent, useState } from "react";
import { Content, TextAreaField, TextField } from "../components";
import { Button } from "../components/Button";
import { fetchContact } from "../../data/baseAPI";
import { toast } from "react-toastify";

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

  const handleContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validErrors = [];
    if (!fullName || fullName.length <= 2) {
      validErrors.push("Wpisz imię i nazwisko");
    }
    if (!email) {
      validErrors.push("Wpisz email");
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

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail("");
    setFullName("");
    setPhone("");
    setTheme("");
    setMessage("");
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
        <form
          className="grid grid-cols-1 w-[690px] gap-y-[34px] mb-[113px]"
          onSubmit={handleContact}
          onReset={handleReset}
        >
          <TextField
            label="Imię i nazwisko"
            required={true}
            inputProps={{
              value: fullName,
              placeholder: "Wpisz imię i nazwisko",
              onChange: (e) => setFullName(e.target.value),
            }}
          />
          <div className="grid grid-cols-2 gap-x-[15px] gap-y-[34px]">
            <TextField
              label="Email"
              required={true}
              inputProps={{
                type: "email",
                value: email,
                placeholder: "Wpisz adres e-mail",
                onChange: (e) => setEmail(e.target.value),
              }}
            />
            <TextField
              label="Telefon"
              inputProps={{
                value: phone,
                placeholder: "Wpisz numer telefonu",
                onChange: (e) => setPhone(e.target.value),
              }}
            />
          </div>
          <div className="grid gap-y-[34px]">
            <TextField
              label="Temat"
              required={true}
              inputProps={{
                value: theme,
                placeholder: "Wpisz temat wiadomości",
                onChange: (e) => setTheme(e.target.value),
              }}
            />
            <TextAreaField
              className="h-[123px]"
              label="Wiadomość"
              required={true}
              textAreaProps={{
                value: message,
                placeholder: "Wpisz tekst wiadomości",
                onChange: (e) => setMessage(e.target.value),
              }}
            />
          </div>
          <div className="flex justify-start flex-row-reverse gap-[16px]">
            <Button variant="contained" type="submit">
              Dodaj
            </Button>
            <Button variant="text" type="reset">
              Reset
            </Button>
          </div>
        </form>
      </Content>
    </>
  );
};
