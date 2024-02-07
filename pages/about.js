import Head from "next/head"
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout
            title="About Page built with Next Js"
            footer="This is the footer for the about page."
        >
            <Head>
                <title>About</title>
            </Head>
            <h1>About Page</h1>
            <p>
                This is the about page for the Next.js example app using the Next.js framework with React for the front end part of the app.
            </p>
        </Layout>
    )
}

export default About