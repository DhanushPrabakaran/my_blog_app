"use client"
import { useRef } from 'react';
import Icon from "@/public/download.png";
import Image from "next/image";
import Link from "next/link";
import bar from "@public/bar.svg"


const Header = () => {
    const ref = useRef();
    function handleClick() {
        //alert('increment like count');
        ref.current.classList.add("flex");
      }
  return (
    <div className=" relative col-span-4 bg-black bg-opacity-20 flex  justify-between items-center h-24 md:rounded-md">
      <Image src={Icon} className="w-[20vh] h-fit ml-3" alt="hello" />
      <div className="text-2xl font-extrabold font-mono  ">Blogs</div>
      <div
      onClick={handleClick}>
      <Image
      src={bar}
      className=" w-12 mr-4" 
      alt="hello"
      />
      </div>
      <div ref={ref} className="hidden  text-white items-end absolute  text-lg font-bold font-mono p-5 flex-col right-0  top-[12vh] w-[400px] bg-black bg-opacity-20 rounded-sm ">
        <Link href={"/"} className="m-2 hover:text-blue-400">
          link1
        </Link>
        <Link href={"/"} className="m-2 hover:text-blue-400">
          link2
        </Link>
        <Link href={"/"} className="m-2 hover:text-blue-400">
          link3
        </Link>
        <Link href={"/post"} className="m-2 hover:text-blue-400">
          link4
        </Link>
      </div>
    </div>
  );
};

export default Header;
