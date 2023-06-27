import React from "react";
import Image from "next/image";
import wallpaper from "@/public/download.png";
const Postcard = () => {
  return (
    <div className="m-1 flex flex-col  items-center  shadow-md rounded-lg bg-white bg-opacity-50 ">
      {/* <Image src={wallpaper} width={500} className="rounded m-2" alt="hello" /> */}
      <div className="text-2xl font-extrabold first-letter:uppercase  text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
      <div className=" text-justify p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        dolorum architecto quam quaerat? Suscipit assumenda non praesentium odio
        dolor expedita architecto perferendis! Vel dolorem quam inventore quidem
        blanditiis velit rerum!
      </div>
      {/* <div className=" relative flex justify-start w-full"> */}
        <button className=" text-center align-middle justify-center m-2  shadow-xl font-bold border-4 w-fit h-10  border-blue-500 rounded-xl bg-blue-500 ease-linear	duration-200 items-center flex p-2">
          Read more...
        </button>
  {/* </div> */}
    </div>
  );
};

export default Postcard;
