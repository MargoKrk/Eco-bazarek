import { useEffect, useState } from "react";
import { CATEGORIES_HOST } from "../../data/baseAPI";
import { Content, FloatingButton } from "../components";
import HomeImage from "../images/hero-image.png";
import { categoriesResult } from "../../data/types";

export const HomePage = () => {
  const [categories, setCategories] = useState<categoriesResult[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(CATEGORIES_HOST);
      const jsonData = await data.json();
      setCategories(jsonData);
    };
    api();
  }, []);

  console.log(categories);

  categories.map((category) => {
    console.log(category);
    console.log(category.id);
  });

  return (
    <Content title="Home">
      <img
        src={HomeImage}
        alt="hero-image"
        className="w-full h-auto mt-[-2rem]"
      />
      <h2 className="uppercase mt-[52px] mb-[37px] text-center">
        popularne kategorie
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-[17px]">
        {categories &&
          categories.map((category) => {
            return (
              <div
                key={category.id}
                className=" flex flex-col justify-center items-center w-[160px] h-[160px] bg-white rounded-2xl"
              >
                <img src={category.iconUrl} className="w-[64px] h-[64px]" />
                <p className="text-[14px]">{category.name}</p>
              </div>
            );
          })}
      </div>
      <FloatingButton />
    </Content>
  );
};
