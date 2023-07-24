"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// let nextId = 0;
const Form = () => {

  const [cardsIndex, setCardsIndex] = useState(0);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [words, setWords] = useState("");
  const [keywords, setKeywords] = useState([]);
  const submit=()=>{

        // console.log(value);
        // console.log(name);
        // console.log(title);
        // console.log(discription);
        // console.log(keywords);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "id":69,
            "value":value,
            "name":name,
            "title":title,
            "discription":discription,
            "keywords":keywords
        })
      };
      fetch('http://localhost:4000/post', requestOptions)
          .then(response => response.json());
          // .then(data => this.setState({ postId: data.id }));

  }
  return (
    <div className="flex  items-center flex-col w-screen">
      <div className="text-center m-4 font-bold text-3xl uppercase font-serif ">
        submit your blog
      </div>
      <div className="flex justify-center  items-center flex-row mb-4 w-[900px] ">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          Name
        </label>
        {/* <div className="md:w-1/3"> */}
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
            id="inline-full-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
        {/* </div> */}
      </div>

      <div className="flex justify-center  items-center flex-row mb-4 w-[900px]">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 ">
        title
        </label>
        {/* <div className="md:w-1/3"> */}
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-[500px]"
            id="inline-full-name"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
          />
        {/* </div> */}
      </div>

      <div className="flex justify-center items-start flex-row mb-4 w-[1000px]">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        discription
        </label>
        <div className="md:w-2/3">
          <textarea
            className="bg-gray-200 h-36 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="text"
            value={discription}
            onChange={(e) => {
              setDiscription(e.target.value);
              console.log(discription);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col w-fit items-center" >
        <div
        className="flex flex-row justify-center items-center">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Keywords
        </label>
        {/* <div className="md:w-2/3"> */}
        
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-[500px]"
            id="inline-full-name"
            type="text"
            value={words}
            onChange={(e) => {
              setWords(e.target.value);
              console.log(keywords);
            }}
          />
          <button
          className="mx-2 my-1 px-6 py-2 bg-blue-500 rounded-lg font-semibold"
          onClick={()=>{
            setCardsIndex((prevValue) => prevValue + 1)
            setKeywords([...keywords,{id : cardsIndex ,words: words}]);
          }}>
            add
          </button>
          </div>
          <div 
          className="w-[400px] my-4">
            {
              keywords.map(keywords=>(
                <div key={keywords.id}
            className=" inline-block w-fit py-1 px-4 rounded-md m-1 bg-blue-400 ">
            {keywords.words}
            </div>
              ))
            }
            
            
            
            
            
            
            
        </div>
      {/* </div> */}
      </div>
      
  

      <div className="flex justify-center items-center m-2  mb-4 w-7/12">
        <ReactQuill
          theme="snow"
          className="w-full"
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="flex justify-center m-2 ">
        <button 
        className="bg-blue-700 rounded-md w-fit p-2 pl-4 pr-4  text-center font-medium text-2xl "
        onClick={submit}
        >
          Submit
        </button>
      </div>
    </div>
    
  );
};

export default Form;
