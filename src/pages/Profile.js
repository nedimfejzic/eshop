import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const signOutHandler = () => {
    authCtx.logout();
  };
  return (
    <div>
      <div className="p-4">
        <div className="text-center mt-24">
          <p className="text-2xl text-gray-800 dark:text-white">
            {authCtx.userEmail}
          </p>

          <p className="text-md text-gray-500 dark:text-gray-400  py-4 font-light">
            Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is
            an imitator, humorist, actor, director, singer, songwriter, poet,
            writer
          </p>
        </div>
        <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
          <button
            onClick={signOutHandler}
            className="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-8 rounded-full"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
