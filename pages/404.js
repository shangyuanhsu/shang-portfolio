// import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ErrorPage = () => {
    // const router = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 3000);
    // }, [router]);

    return (
        <div className="errorPage">
            <h1>Oops!</h1>
            <h2>That page cannot found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    );
}

export default ErrorPage;