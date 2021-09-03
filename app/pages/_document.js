import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head>
                    <title>Пробел Поэзии</title>
                    <meta name="description" content="Стихи в новом формате" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
                    />
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/swiper/swiper-bundle.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/swiper/swiper-bundle.min.css"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
