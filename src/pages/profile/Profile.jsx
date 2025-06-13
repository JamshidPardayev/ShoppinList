import { Archive, Files } from "lucide-react";
import admin from "../../assets/admin.png";
import { useUserStore } from "../../store/useUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useToken";
import { useState } from "react";
import axios from "axios";
import { API } from "../../hooks/getEnv";

const Prifile = () => {
  const { user, clearUser } = useUserStore();
  const { clearToken, token } = useAuthStore();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyUsername = () => {
    if (user?.username) {
      navigator.clipboard.writeText(user.username);
      toast.success("Username copied! 📋");
    } else {
      toast.error("No username to copy.");
    }
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

const confirmDelete = async () => {
  try {
    setLoading(true);
    const response = await axios({
      method: "delete",
      url: `${API}/users`,
      data: {
        name: user?.name,
        username: user?.username,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      clearUser();
      clearToken();
      localStorage.removeItem("token");
      toast.success("Account deleted! 🗑️");
      navigate("/login");
    } else {
      toast.error("Failed to delete account.");
    }
  } catch (error) {
    toast.error("Error deleting account!");
  } finally {
    setIsModalOpen(false);
    setLoading(false);
  }
};


  return (
    <div className="w-[80%]">
      <div className="m-2 rounded-2xl p-4 w-full">
        <div className="flex gap-1 justify-between items-center">
          <h2 className="text-[36px] max-lg:text-[30px] font-semibold">
            Your Profile
          </h2>
          <div className="flex gap-2">
            <button
              onClick={copyUsername}
              className="flex text-[16px] items-center h-[40px] gap-1 px-3 bg-blue-500 hover:bg-blue-700 duration-300 text-white rounded-[6px]"
            >
              <Files />
              <p className="max-sm:hidden">Copy Username</p>
            </button>
            <button
              onClick={handleDeleteClick}
              className="flex text-[16px] items-center h-[40px] gap-1 px-3 bg-red-500 hover:bg-red-700 duration-300 text-white rounded-[6px]"
            >
              <Archive />
              <p className="max-sm:hidden">Delete Account</p>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 max-sm:flex-col mt-4 max-sm:text-center">
          <div className="max-w-[150px]">
            <img src={admin} alt="adminImg" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-[30px] font-semibold line-clamp-1">
              {user?.name || "No name"}
              <span className="ml-4 bg-green-700 text-[16px] px-4 py-1 rounded-[5px] text-white font-bold">
                Active
              </span>
            </h3>
            <p className="text-[16px] mt-3 text-gray-600 line-clamp-1">
              {user?.username || "No username"}
            </p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-500 opacity-90 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-[400px] shadow-lg text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-4">
              Are you sure?
            </h2>
            <p className="text-gray-700 mb-6">
              Do you really want to delete your account?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={confirmDelete}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prifile;
