"use client"
import { useState } from 'react';
import Icon from "@/public/download.png";
import Image from "next/image";
import Link from "next/link";
import bar from "@public/bar.svg"


const Header = () => {
  const [navBar, setNavBar] = useState(false);
  
  return (
    <div className=" relative col-span-4 bg-black bg-opacity-20 flex  justify-between items-center h-24 md:rounded-md">
      <Image src={Icon} className="w-[20vh] h-fit " alt="hello" />
      <div className="text-2xl font-extrabold font-mono  ">Blogs</div>
      <div
      onClick={()=>{setNavBar(!navBar)}}>
      <Image
      src={bar}
      className=" w-12 " 
      alt="hello"
      />
      </div>
      <div id='list' className={` ${navBar? 'flex':'hidden'} items-stretch  text-white  absolute  text-lg font-bold font-mono p-5 flex-col right-0  top-[12vh] w-[400px] bg-black bg-opacity-20 rounded-sm `}>
       
        <Link href={"/"} className="m-2 text-end p-5 hover:bg-slate-500 rounded-md cursor-pointer z-10  ">
          link1
        </Link>
        <Link href={"/"} className="m-2 text-end p-5 hover:bg-slate-400 rounded-md cursor-pointer z-10   ">
          link1
        </Link>
        <Link href={"/"} className="m-2 text-end p-5 hover:bg-slate-500 rounded-md cursor-pointer  z-10  ">
          link1
        </Link>
        <Link href={"/post"} className="m-2 text-end p-5 hover:bg-slate-500 rounded-md cursor-pointer  z-10  ">
          link1
        </Link>
        {/* <Link href={"/"} className="m-2  text-end p-5 hover:bg-slate-500 rounded-md cursor-pointer">
          link2
        </Link>
        <Link href={"/"} className="m-2  text-end p-5 hover:bg-slate-500 rounded-md">
          link3
        </Link>
        <Link href={"/post"} className="m-2  text-end p-5 hover:bg-slate-500 rounded-md">
          link4
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
