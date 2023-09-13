import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import { Loader } from "./Loader";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  title: string;
  loading?: boolean;
}

export const Content = (props: ContentProps) => {
  const { children, title, loading, ...other } = props;


  return (
    <main {...other} className="container mx-auto my-8">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-opacity-40 bg-[#f6f5f1]/75">
          <Loader className="absolute top-[10%] left-[50%]" />
        </div>
      )}
      {children}
    </main>
  );
};
