import { useState } from "react";
import { Content, FloatingButton } from "../components";

export const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const allLoadEvent = () => {
    setIsLoading(false);
  };

  return (
    <Content title="Produkty" onLoad={allLoadEvent} loading={isLoading}>
     <h1>Products Page</h1> 
      <FloatingButton />
    </Content>
  );
};
