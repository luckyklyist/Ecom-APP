"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserProfile {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  password: string;
  role: string;
  __v: number;
}

export default function Page() {
  const [user, setUser] = useState<UserProfile>();
  const getProfile = async () => {
    const token = Cookies.get("token");
    const resp = await axios.get("http://localhost:3004/api/v1/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(resp.data);
    setUser(resp.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">User Profile</h1>

        <div className="bg-gray-800 shadow-md p-4 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-lg font-semibold pr-2">Username:</div>
              <div className="text-gray-600">{user?.username}</div>
            </div>

            <div className="flex items-center">
              <div className="text-lg font-semibold pr-2">Email:</div>
              <div className="text-gray-600">{user?.email}</div>
            </div>

            <div className="flex items-center">
              <div className="text-lg font-semibold pr-2">Is Verified:</div>
              <div className="text-gray-600">
                {user?.isVerified ? (
                  <span className="text-green-600">Yes</span>
                ) : (
                  <span className="text-red-600">No</span>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-lg font-semibold pr-2">Role:</div>
              <div className="text-gray-600">{user?.role}</div>
            </div>
          </div>

          <button className="px-4 py-2 my-4 font-semibold text-white bg-red-500 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
