import React from "react";
import { FaMicrophone , FaRegUserCircle, FaSearch, FaYoutube } from "react-icons/fa";
import { BiSolidMicrophone,BiMicrophone} from "react-icons/bi";
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineMore} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <>


<div className=" p-2  grid grid-flow-col ">
        <div className="flex  col-span-1">
            <div onClick={() => toggleMenuHandler()}
          className= "p-3 cursor-pointer"
          alt="menu">

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



// import React from "react";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";

// const Head = () => {
//   const dispatch = useDispatch();

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };

//   return (
//     <div className="grid grid-flow-col p-5 m-2 shadow-lg">
//       <div className="flex col-span-1">
//         <img
//           onClick={() => toggleMenuHandler()}
//           className="h-8 cursor-pointer"
//           alt="menu"
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
//         />
//         <a href="/">
//           <img
//             className="h-8 mx-2"
//             alt="youtube-logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
//           />
//         </a>
//       </div>
//       <div className="col-span-10 px-10">
//         <input
//           className="w-1/2 border border-gray-400 p-2 rounded-l-full"
//           type="text"
//         />
//         <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
//           🔍
//         </button>
//       </div>
//       <div className="col-span-1">
//         <img
//           className="h-8"
//           alt="user"
//           src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;
