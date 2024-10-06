import { FC } from "react";
import Image from "next/image";

const Divide: FC = () => {
  return (
    <div className="mx-auto flex justify-center items-center my-8">
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
    </div>
  );
};

export default Divide;
