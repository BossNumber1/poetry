import {FC} from 'react';
import {AppProps} from 'next/app';
import Head from "next/head";
import "../styles/globals.scss";
import {wrapper} from "../redux/store";

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
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

export default wrapper.withRedux(MyApp);