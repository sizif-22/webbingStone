import { CiMail, CiClock2 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";


const PreHeader = () => {
    return (
        <div className="flex items-center justify-between md:px-10 ">
      <div className="flex">
        <p className="flex items-center gap-1 px-4 py-3 cursor-pointer hover:text-secondary">
          <CiMail /> info@webbingstone.com
        </p>
        <p className="md:flex hidden items-center gap-1 px-4 py-3">
          <CiClock2 /> Sun - Thu 10:00am - 6:00pm/Fri & Sat - CLOSED
        </p>
      </div>
      <div className="text-white bg-primary hidden px-2 py-3 md:flex gap-2 items-center cursor-pointer hover:opacity-95 transition-all">
        <FiPhone /> +0201000896930
      </div>
    </div>
  );
};

export default PreHeader;