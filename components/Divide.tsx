import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

export type DivideProps = {
  className?: string;
};

const Divide: FC<DivideProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        className,
        "mx-auto flex justify-center items-center my-8"
      )}
    >
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
      <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
    </div>
  );
};

export default Divide;
