import React from "react";
import Post from "@components/Post";
import Header from "@components/Header";
import Footer from "@components/Footer";
const page = () => {
  return (
    <div className="md:flex md:justify-center md:h-screen ">
      <div className=" grid grid-cols-4 gap-1 w-screen md:w-[98vw]">
        <Header />
        <div className="h-[75vh] col-span-4 justify-center  flex  m-3">
          <div className="h-[75vh]   bg-white overflow-hidden overflow-y-scroll bg-opacity-0  w-[90vw] ">
            
            <Post />
            
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default page;
