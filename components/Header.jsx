"use client"
import { useState } from 'react';
import Icon from "@/public/download.png";
import Image from "next/image";
import Link from "next/link";
import bar from "@public/bar.svg"
import cancel from '@public/cancel.svg'

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const [navIcon,setNavIcon] = useState(false);
  return (
    <div className=" relative col-span-4 bg-black bg-opacity-60 flex justify-between items-center h-24 ">
      <Image src={Icon} className="w-[20vh] h-fit ml-4" alt="hello" />

      <div
      onClick={()=>{setNavBar(!navBar)
      setNavIcon(!navIcon)}}>
      <Image
      
      src={navIcon? cancel :bar}
      className=" transition-transform duration-500 ease-linear w-8 mr-4 hover:rotate-180" 
      alt="hello"
      />
      </div>
      <div id='list' className={` ${navBar? 'flex':'hidden'} items-stretch  text-white  absolute  text-lg font-bold font-mono p-5 flex-col right-0  top-[12vh] w-[400px] bg-black bg-opacity-20 rounded-sm transition-all delay-700 ease-linear`}>
       
        <Link href={"/post"} className="m-2 text-end p-5 hover:bg-slate-500 rounded-md cursor-pointer z-10  ">
          link1
        </Link>
        <Link href={"/post"} className="m-2 text-end p-5 hover:bg-slate-400 rounded-md cursor-pointer z-10   ">
          link1
        </Link>
        <Link href={"/form"} className="m-2 text-end p-5 hover:bg-slate-500 rounded-md cursor-pointer  z-10  ">
          link1
        </Link>
        <Link href={"/"} className="m-2 text-end p-5 hover:bg-slate-500 rounded-md cursor-pointer  z-10  ">
          back
        </Link>
        
      </div>
    </div>
  );
};

export default Header;
