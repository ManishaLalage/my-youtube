import React from "react";
import { FaMicrophone , FaRegUserCircle, FaSearch, FaYoutube } from "react-icons/fa";
import { BiSolidMicrophone,BiMicrophone} from "react-icons/bi";
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineMore} from "react-icons/ai"
const Head = () => {
  return (
    <>


<div className=" p-2  grid grid-flow-col ">
        <div className="flex  col-span-1">
            <div className="p-3">
        <RxHamburgerMenu size={25}/>
        </div>
         <div className="flex p-2"> <FaYoutube className="text-red-500" size={35}/> 
         <span className="text-blue-950 font-bold text-xl">YouTube</span> </div>
        
        </div>
        <div className="col-span-10 flex justify-center ">
          <input
            className="w-1/2 border pl-4 text-gray-500 text-xl hover:w-7/12 border-gray-400 outline-none rounded-l-full "
            type="search"
            placeholder="search"
          />
          <button className="bg-gray-200  px-6 border border-gray-400 rounded-r-full">
            <FaSearch size={20} /></button>
           <span className="p-2 ">
           < BiMicrophone size={30}/>
        </span>
        </div>
       
        <div className="flex grid-cols-1 ">
            <div className="p-2">
          <AiOutlineMore size={30}/>
          </div>
          <div className="p-2">
          <FaRegUserCircle size={30}/>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Head;
