"use client";
import { Profile } from "ui";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";

export default function Page() {
  const getProfile = async () => {
    const token = Cookies.get("token");
    const resp = await axios.get("http://localhost:3001/api/v1/user/userlist", {
      headers: {
        Authorization: token,
      },
    });
    console.log(resp);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Profile />
    </>
  );
}
