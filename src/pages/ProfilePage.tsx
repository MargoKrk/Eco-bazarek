import { Content, TextField } from "../components";
import { Button } from "../components/Button";

export const ProfilePage = () => {
  return (
    <Content title="Profil">
      <h1 className="container uppercase">zaloguj się</h1>
      <form className="flex flex-col">
        <TextField className="mt-2" />
        <TextField type="password" className="mt-2" />
        <div>
          <Button variant="text">Zarejestruj sie</Button>
          <Button variant="contained">Zaloguj się</Button>
        </div>
      </form>
    </Content>
  );
};
