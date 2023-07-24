'use client'
import React,{useEffect,useState} from "react";
import Post from "@components/Post";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { data } from "autoprefixer";

const page = () => {

  const [cards, setCards] = useState({});
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:4000/post/69')
        .then(response => response.json())
        .then(data => setCards(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  return (
    
    <div className="md:flex md:justify-center md:h-screen ">
      <div className=" grid grid-cols-4 gap-2 w-screen md:w-[100vw] ">
        <Header />
        <div className="col-span-full flex justify-center items-center  m-3" >
          
           <div className=" flex overflow-y-auto  justify-center items-center "> {/*  */}
           
           <Post data={cards}/>
            
      
            
          </div>
        </div>

        
        <Footer />
      </div>
    </div>
  );
};

export default page;
