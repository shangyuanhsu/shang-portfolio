// import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from 'next/head';

const ErrorPage = () => {
    // const router = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 3000);
    // }, [router]);

    return (
        <>

            <Head>
                <meta name="description" content="shangyuan's homepage" />
                <meta name="author" content="shangyuan" />
                <link rel="shortcut icon" href="/img/shang.ico" />
                <link rel="bookmark" href="/img/shang.ico" />
                <title>Shang | 404</title>
            </Head>
            <div className="errorPage">
                <h1>Oops!</h1>
                <h2>That page cannot found.</h2>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
        </>

    );
}

export default ErrorPage;