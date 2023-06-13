import { AiFillHome,AiOutlineLike,AiOutlineShopping,AiOutlineTrophy,AiOutlineBulb} from "react-icons/ai";
import {
  MdSubscriptions,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineMusicNote
} from "react-icons/md";
import {FiFilm} from "react-icons/fi"
import {BsStopwatch} from "react-icons/bs"
import { GoHistory,GoHome} from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import {FaRegNewspaper,FaVideo} from "react-icons/fa";
import {SiYoutubegaming} from "react-icons/si";
import {GrHomeRounded} from "react-icons/gr"
const Sidebar = () => {
  const sideMenu = [
    {
      id: 1,
      child: (
        <>
        <GrHomeRounded size={20} />
          <span className="ml-7">Home</span>
        </>
      ),
      href: "",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaVideo size={20} />
          <span className="ml-7">Shorts</span>
        </>
      ),
      href: "",
      style: "bg-red-300-300",
    },
    {
      id: 3,
      child: (
        <>
          <MdOutlineSubscriptions size={25} />
          <span className="ml-7">Subscriptions</span>
        </>
      ),
      href: "",
      style: "border-b pb-3 mb-3",
    },
    {
      id: 4,
      child: (
        <>
          <MdOutlineVideoLibrary size={25} />
          <span className="ml-7">Library</span>
        </>
      ),
      href: "",
      style: "",
    },
    {
      id: 5,
      child: (
        <>
          <GoHistory size={25} />
          <span className="ml-7">History</span>
        </>
      ),
      href: "",
      //   style : 'rounded-br-md',
    },
    {
      id: 6,
      child: (
        <>
          <RxVideo size={25} />
          <span className="ml-7">Your Videos</span>
        </>
      ),
      href: "",
      //   style : 'rounded-br-md',
    },
    {
      id: 7,
      child: (
        <>
          <BsStopwatch size={25} />
          <span className="ml-7">Watch Later</span>
        </>
      ),
      href: "",
      style: "",
    },
    {
      id: 8,
      child: (
        <>
          <AiOutlineLike size={25} />
          <span className="ml-7">Liked Videos</span>
        </>
      ),
      href: "",
      style: "border-b pb-3 mb-3",
    },
    {
      id: 9,
      child: (
        <>
          <FaRegNewspaper size={25} />
          <span className="ml-7">Trending</span>
        </>
      ),
      href: "",
      style: "",
    },
    {
      id: 10,
      child: (
        <>
          <AiOutlineShopping size={25} />
          <span className="ml-7">Shopping</span>
        </>
      ),
      href: "",
      style: "",
    },
    {
      id: 11,
      child: (
        <>
          <MdOutlineMusicNote size={25} />
          <span className="ml-7">Music</span>
        </>
      ),
      href: "",
      style: "",
    },
    {
      id: 12,
      child: (
        <>
          <FiFilm size={25} />
          <span className="ml-7">Film</span>
        </>
      ),
      href: "",
      style: "",
    },
    {
        id: 13,
        child: (
          <>
            <SiYoutubegaming size={25} />
            <span className="ml-7">Gaming</span>
          </>
        ),
        href: "",
        style: "",
      },
      {
        id: 14,
        child: (
          <>
        <AiOutlineTrophy size={25} />
            <span className="ml-7">Sports</span>
          </>
        ),
        href: "",
        style: "",
      },
      {
        id: 15,
        child: (
          <>
        <AiOutlineBulb size={25} />
            <span className="pl-7">Sports</span>
          </>
        ),
        href: "",
        style: "",
      },





  ];

  return (
    <>
      <div className="col-span-1 px-3 py-2 shadow-lg ">
        
          <ul >
            {sideMenu.map(({ id, child, href, style }) => (
              <li
                key={id}
                className={
                  " " + " " + style
                }
              >
                <a
                  href={href}
                  className="flex pl-4 py-3 hover:bg-gray-100
                   hover:rounded-lg text-black"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
          {/* <ul>   
            <li><AiFillHome/><span>Home</span></li>
            <li>Shorts</li>
            <li><MdOutlineSubscriptions/><span>Subscriptions</span></li>
                 </ul>

                <ul>
          <li>   <MdOutlineVideoLibrary/> <span>Library</span> </li>
          <li><GoHistory/> <span> History</span></li>
         <li><RxVideo/> <span>Your Videos</span></li>
         <li><AiOutlineLike/> <span></span></li> */}

        
      </div>
    </>
  );
};

export default Sidebar;
