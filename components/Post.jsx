'use client'
import clock from "@public/clock.svg";
import Image from "next/image";
import { useState,useEffect } from "react";

const Post = (props) => {

  return (
    <div className=" bg-slate-300 bg-opacity-80 rounded-md  p-4 flex flex-col items-center justify-center font-serif text-3xl w-[1900px]">
      <div className="font-bold font-serif text-4xl text-center">
      {props.data.title}
      </div>
      <div className="flex mt-4 mb-4 ">
        <div className="flex mr-5">
          <Image src={clock} width={30} className="mr-1" />
          <div className="text-center"> 04/2004</div>
        </div>
        <div>
          <div>Author :{props.data.name}</div>
        </div>
      </div>
      <div className="whitespace-pre-wrap text-justify "dangerouslySetInnerHTML={{ __html:props.data.value }} >      
</div>
    </div>
  );
};

export default Post;
