'use client'
import { SignUp } from 'ui';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
    const onSignUp = async (username:string,email:string,password:string) => {
        try {
            const resp = await axios.post(`http://localhost:3004/api/v1/user/signup`, { username,email,password,role:"User" })
            if(resp.status===201){
                toast.success("Account Created Successfully");
            }
        }
        catch (error) {
            console.log(error);
        }        
    }
    return (
        <>
            <SignUp onSignUp={onSignUp} />
            <ToastContainer />
        </>
    )
}