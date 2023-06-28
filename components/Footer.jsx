"use client";
import Icon from "@/public/download.png";
import Image from "next/image";
import Link from "next/link";
import bar from "@public/bar.svg";

const Header = () => {
  return (
    <div className=" relative col-span-4 bg-white bg-opacity-20 flex  justify-between items-center h-24 md:rounded-md">
      <Image src={Icon} className="w-[20vh] h-fit ml-3" alt="hello" />

      
    </div>
      

  );
};

export default Header;
