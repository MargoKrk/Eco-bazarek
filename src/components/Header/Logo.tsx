import  Wheat from '../../images/logo-main.png'

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={Wheat} alt="logo" className="h-10 w-10" />
      <div>EcoBazarek</div>
    </div>
  );
};
