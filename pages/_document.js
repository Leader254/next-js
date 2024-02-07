import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="This is an example app using the Next.js framework with React for the front end part of the app." />
                    <meta name="keywords" content="Next.js, React, Example App" />
                    <link rel="stylesheet" href="/static/styles.css" />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;