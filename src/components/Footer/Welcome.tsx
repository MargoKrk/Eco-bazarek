import Envelope from "../../images/evelop.png";

export const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <img src={Envelope} alt="logo" className="h-[65px] w-[65px]" />
      <h3 className="uppercase">subskrybuj</h3>
      <p>Bądź pierwszym, który się dowie o naszych produktach</p>
    </div>
  );
};
