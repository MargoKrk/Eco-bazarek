import { NavItem } from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Envelope from "../../images/evelop.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { MediaItem } from "./MediaItem";
import { Subscribe } from "./Subscribe";
import { Welcome } from "./Welcome";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-center items-center h-[514px] bg-[#412F22] text-white">
        <Welcome />
        <Subscribe />

        <ul className="flex">
          <MediaItem to="https://pl-pl.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </MediaItem>
          <MediaItem to="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </MediaItem>
          <MediaItem to="https://pl.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} />
          </MediaItem>
          <MediaItem to="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </MediaItem>
          <MediaItem to="https://www.youtube.com/">
            <FontAwesomeIcon icon={faYoutube} />
          </MediaItem>
        </ul>

        <ul className="flex">
          <NavItem to="/about-us">O nas</NavItem>
          <NavItem to="/products">Produkty</NavItem>
          <NavItem to="/contact">Kontakt</NavItem>
          <NavItem to="/term-of-use">Warunki użytkowania</NavItem>
          <NavItem to="/privacy policy">Polityka prywatności</NavItem>
        </ul>
      </footer>
    </>
  );
};
