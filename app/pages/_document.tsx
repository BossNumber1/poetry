import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head />
                <Main />
                <NextScript />
            </Html>
        );
    }
}
