import { useEffect, useState } from "react";
import { HOST } from "../../../../data/baseAPI";
import { BaseType, categoriesResult } from "../../../../data/types";
import "./checkbox.css"


export const YourProducts = () => {
  const [types, setTypes] = useState<BaseType[]>([]);
  const [categories, setCategories] = useState<categoriesResult[]>([]);

  useEffect(() => {
    const api = async () => {
      const dataTypes = await fetch(HOST + "/products/types");
      const dataCategories = await fetch(HOST + "/products/categories");
      const jsonTypes = await dataTypes.json();
      const jsonCategories = await dataCategories.json();
      setTypes(jsonTypes);
      setCategories(jsonCategories);
      console.log(jsonTypes);
      console.log(jsonCategories);
    };
    api();
  }, []);

  return (
    <div className="grid grid-cols-2 text-sm">
      <div className="flex flex-col w-[250px]">
        <div className="flex flex-col">
          <h4 className="font-bold mt-[30px]">Typ</h4>
          {types &&
            types.map((type) => {
              return (
                <div className="py-[12px]">
                  <input type="checkbox" />
                  <label key={type.id}>{type.name}</label>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold mt-[30px]">Kategorie</h4>
          {categories &&
            categories.map((category) => {
              return (
                <div className="py-[12px]">
                  <input type="checkbox" />
                  <label key={category.id}>{category.name}</label>
                </div>
              );
            })}
        </div>
      </div>
      <div> OBRAZKI </div>
    </div>
  );
};
