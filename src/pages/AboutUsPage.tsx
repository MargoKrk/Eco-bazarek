import { useState } from "react";
import { Content, FloatingButton } from "../components";
import AboutUsImage from "../images/about-us-hero.png";

export const AboutUsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const allLoadEvent = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Content title="O nas" onLoadCapture={allLoadEvent} loading={isLoading}>
        <img
          src={AboutUsImage}
          alt="hero-image"
          className="w-full h-auto mt-[-2rem]"
        />
        <h1 className="uppercase my-[35px]">O nas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque
          sit amet est scelerisque suscipit ut a justo. In iaculis, purus id
          molestie ultricies, lorem magna consectetur ipsum, vitae placerat
          ipsum turpis et dui. Duis enim nisi, tempor quis bibendum a,
          pellentesque vitae quam. Ut et feugiat velit, nec pellentesque enim.
          Etiam rhoncus, turpis quis fringilla sollicitudin, ante velit lacinia
          ligula, sed viverra lacus urna nec massa. Vivamus nibh orci, suscipit
          commodo turpis eu, convallis pulvinar lacus. Praesent cursus sed risus
          vitae pellentesque. Mauris a posuere neque. Sed sit amet lacus
          lobortis, vulputate purus ultricies, scelerisque libero. Donec
          pellentesque efficitur nibh non auctor. Fusce vel placerat enim. Sed
          sed velit elementum, tincidunt augue in, posuere dolor. Donec
          porttitor ante eget fringilla porttitor. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sit
          amet nulla a mauris eleifend molestie. Etiam sed auctor purus.
          <br />
          Donec eget elit risus. In hac habitasse platea dictumst. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus feugiat justo
          magna, et egestas urna ullamcorper vitae. Duis pulvinar et felis et
          pretium. Vestibulum sagittis neque vitae augue maximus dictum.
          Pellentesque quis tellus sed dolor sagittis efficitur ut in lectus.
          <br />
          Morbi viverra gravida pulvinar. Sed imperdiet sem vitae magna
          consequat, a scelerisque sem feugiat. Vivamus vel magna diam. Praesent
          sit amet ipsum at dui ultrices tempus at nec nisl. Duis cursus diam
          vitae nulla fringilla scelerisque sed quis risus. Duis eget arcu
          ligula. Donec laoreet interdum orci in hendrerit. Praesent
          sollicitudin dapibus nunc sit amet porta. Ut in rhoncus ex. Aenean
          volutpat et augue quis volutpat.
        </p>
        <h1 className="uppercase my-[35px]">nasze uprawy z lotu ptaka</h1>
        <figure className="h-0 pb-[56.25%] relative w-full mb-9">
          <iframe
            src="https://player.vimeo.com/video/724732134?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1&muted=1"
            className="h-full left-0 absolute top-0 w-full"
          ></iframe>
        </figure>
        <FloatingButton />
      </Content>
    </>
  );
};
