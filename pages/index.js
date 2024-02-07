import Head from "next/head"
import Layout from "../components/layout"
const Index = () => {
    return (
        <Layout
            title="Home Page built with Next Js"
            footer={`This is the footer for the home page built on ${new Date().getFullYear()}.`}
        >
            <Head>
                <title>Home</title>
            </Head>
            <h1>Hello Next.js</h1>

            <p>
                Welcome to the Next.js example app using the Next.js framework with React for the front end part of the app.
            </p>
        </Layout>
    )
}

export default Index