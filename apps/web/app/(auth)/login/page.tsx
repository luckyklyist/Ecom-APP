"use client";
import { LoginForm } from "ui";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const onLogin = async (email: string, password: string) => {
    try {
      const resp = await axios.post(`http://localhost:3004/api/v1/user/login`, {
        email,
        password,
      });
      console.log(resp.data.token);
      console.log(resp);
      if (resp.status == 200) {
        document.cookie = `token=${resp.data.token}`;
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <>
      <LoginForm onLogin={onLogin} />
    </>
  );
}
``;
