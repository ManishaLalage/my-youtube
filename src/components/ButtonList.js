import React from "react";
// import Button from "./Button";
const ButtonList = () => {
  const list = [
    { id: 1, title: "All" },
    { id: 2, title: "Mixes" },
    { id: 3, title: "Gaming" },
    { id: 4, title: "Music" },
    { id: 5, title: "Songs" },
    { id: 6, title: "Bollywood Music " },
    { id: 7, title: "Soccer" },
    { id: 8, title: "Movies Musicals" },
    { id: 9, title: "Cooking" },
    { id: 10, title: "Javascript" },
    // { id: 11, title: "Cricket" },
    // { id: 12, title: "Live" },

  ];

  return (
    <div className="py-2">
      {/* <h1>ss</h1> */}

      {list.map(({id,title}) => (
        
        <>
        {/* <Button key={id} /> */}
        <button key={id}  className="px-5 py-2 m-2 bg-gray-200 hover:bg-slate-300 rounded-lg">{title}</button>

        </>
      ))}
    </div>
  );
};

export default ButtonList;
