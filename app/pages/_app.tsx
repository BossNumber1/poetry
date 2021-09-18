import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Пробел Поэзии</title>
                <meta name="description" content="Стихи в новом формате" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
