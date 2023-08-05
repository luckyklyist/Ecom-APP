"use client"
import { LoginForm } from "ui";
import axios from "axios";

export default function Page() {

    const onLogin = async (email: string, password: string) => {
        const resp = await axios.post(`http://localhost:3001/api/v1/user/login`, { email, password })
        console.log(resp.data.token)
        console.log(resp)
        if (resp.status == 200) {
            document.cookie = `token=${resp.data.token}`;
        }
    }

    return (
        <>
            <LoginForm onLogin={onLogin} />
        </>
    )
} ``