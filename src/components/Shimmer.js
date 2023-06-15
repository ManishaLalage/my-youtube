const Shimmer = () => {
    return (
      <div className="flex flex-wrap">
         {
          Array(10)
          .fill("")
          .map((e,index) => (
              <div key={index} className="w-64  h-72 m-4 p-4 bg-gray-50 ">
              <div className="bg-gray-200 h-32 mt-3" >  </div>
              <h2 className="bg-gray-200 w-40 p-3 mt-3"></h2>
              <h3 className="bg-gray-200 p-3 w-36 mt-3"></h3>
              <h4 className="bg-gray-200 p-3 w-32 mt-3"></h4>
            </div>
          ))}                      
      </div>
    );
  };
  
  export default Shimmer;
  