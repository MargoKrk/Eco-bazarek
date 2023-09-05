import { Content, FloatingButton } from "../components";
import HomeImage from "../images/hero-image.png"

export const HomePage = () => {
  return (
    <Content title="Home">
            <img
        src={HomeImage}
        alt="hero-image"
        className="w-full h-auto mt-[-2rem]"
      />

      <h2 className="uppercase mt-[52px] mb-[37px] text-center">popularne kategorie</h2>
      <FloatingButton />
    </Content>
  );
};
