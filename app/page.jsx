'use client'
// import Layout from '@/components/Layout'
import Header from "@/components/Header";
import Postcard from "@/components/Postcard";
import Footer from "@components/Footer";
import { Suspense } from "react";
import Loading from "./Loading";
import { useState,useEffect, } from "react";
import { data } from "autoprefixer";
import Hero from "@components/Hero";

const page = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:4000/post')
        .then(response => response.json())
        .then(data => setCards(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  
  return (
    <div className="md:flex md:justify-center md:h-screen ">
      <div className=" grid grid-cols-4 gap-2 w-screen md:w-[100vw] ">
      
        <Header />
        <Hero/>
        <Suspense fallback={<Loading/>}>
        <div className="col-span-4 md:col-span-1 m-3">
          <div className="  grow flex-col bg-white bg-opacity-20 overflow-hidden overflow-y-scroll rounded-md ml-3 ">
          <div
           className=" p-7 font-bold text-2xl md:col-span-3  m-2 shadow-md rounded-lg bg-white bg-opacity-50 text-center h-10 flex justify-center items-center  uppercase"
           >
            Recent Posts
           </div>
           {/* <Postcard /> */}
           
           
            <div
           className=" font-semibold text-1xl md:col-span-3  m-2 p-2 shadow-md rounded-lg bg-white bg-opacity-50 text-center h-10 flex justify-center items-center sticky"
           >
             Stress 
           </div>
           <div
           className=" font-semibold text-1xl md:col-span-3  m-2 p-2 shadow-md rounded-lg bg-white bg-opacity-50 text-center h-10 flex justify-center items-center sticky"
           >
             Stress 
           </div>
           
          </div>
        </div>
        <div className="col-span-4 md:col-span-3 flex  m-3 flex-wrap" >
          
           <div className=" h-screen grow bg-white overflow-hidden overflow-y-scroll bg-opacity-0 flex flex-wrap"> {/*  */}
           <div
           className=" font-bold text-2xl md:col-span-4  m-2 shadow-md rounded-lg bg-white bg-opacity-50 text-center h-10 flex justify-center items-center "
           >
            Recent Posts
           </div >
           {
            cards.map(cards=>(
            <Postcard data={cards}  />
            ))
           }
            
           
            
          </div>
        </div>

       
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default page;
