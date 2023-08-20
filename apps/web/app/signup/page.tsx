'use client'
import { SignUp } from 'ui';

export default function Page() {
    const onSignUp = async () => {
        try {

        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <SignUp onSignUp={onSignUp} />
        </>
    )
}