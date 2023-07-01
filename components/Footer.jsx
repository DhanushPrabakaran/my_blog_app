"use client";
import Icon from "@/public/download.png";
import Image from "next/image";
import Link from "next/link";
import bar from "@public/bar.svg";

const Header = () => {
  return (
    <div className=" relative col-span-4 bg-black bg-opacity-90 flex  justify-center items-center h-24  ">
      <Image src={Icon} className="w-[20vh] h-fit ml-3" alt="hello" />

      
    </div>
      

  );
};

export default Header;
