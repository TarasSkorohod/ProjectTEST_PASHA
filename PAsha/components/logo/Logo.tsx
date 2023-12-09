import Image from "next/image";
import logo from "../../public/logo.png"
export const Logo = () => {
  return (
      <div className="flex items-center justify-center">
          <Image src={logo} alt={"Помилка фото"} className="max-w-[70%] h-auto" />
      </div>
  );
};
