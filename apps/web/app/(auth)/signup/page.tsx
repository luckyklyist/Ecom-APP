"use client";
import { SignUp } from "ui";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const onSignUp = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const resp = await axios.post(
        `http://localhost:3004/api/v1/user/signup`,
        { username, email, password, role: "User" }
      );
      if (resp.status === 201) {
        toast.success("Account Created Successfully");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SignUp onSignUp={onSignUp} />
      <ToastContainer />
    </>
  );
}
