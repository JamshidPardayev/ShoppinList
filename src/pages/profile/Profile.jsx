import { Archive, Files } from "lucide-react";
import admin from "../../assets/admin.png";

const Prifile = () => {
  const copyUsername = () => {};
  const deleteAccount = () => {};
  return (
    <div className="w-[80%]">
      <div className="m-2  rounded-2xl p-4 w-full">
        <div className="flex gap-1 justify-between items-center">
          <h2 className="text-[36px] max-lg:text-[30px] font-semibold">
            Your Profile
          </h2>
          <div className="flex gap-2">
            <button
              onClick={copyUsername}
              className="flex text-[16px] max-lg:text-[15px] items-center h-[40px] gap-1 px-3  bg-blue-500  hover:bg-blue-700 duration-300 cursor-pointer text-white rounded-[6px]"
            >
              <Files />
              <p className="max-sm:hidden">Copy Username</p>
            </button>
            <button
              onClick={deleteAccount}
              className="flex text-[16px] max-lg:text-[15px] items-center h-[40px] gap-1 px-3  bg-red-500  hover:bg-red-700 duration-300 cursor-pointer text-white rounded-[6px]"
            >
              <Archive />
              <p className="max-sm:hidden">Delete Account</p>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 max-sm:flex-col mt-4 max-sm:text-center">
          <div className="max-w-[150px] ">
            <img src={admin} alt="adminImg" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-[30px] font-semibold line-clamp-1">
              Jamshid{" "}
              <span className="bg-green-700 text-[16px] px-4 py-1 rounded-[5px] text-white font-bold">
                Active
              </span>
            </h3>
            <p className="text-[16px] mt-3 text-gray-600  line-clamp-1">jamshid200210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prifile;
