import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";
import { useState } from "react";
import Router from "next/router";

const News = ({ news }) => {
    // const [query, setQuery] = useState("react");
    const [value, setValue] = useState({
        text : "react",
        collMsg : ''
    });

    const { text, collMsg } = value;

    if (!news) {
        return <Error statusCode={503} />;
    }

    const handleChange = name => e => {
        // setQuery(e.target.value);
        setValue({ ...value, [name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Router.push(`/news/?query=${text}`);
    }

    const sourceFrom = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange('text')} />
            <input type="text" placeholder="Search News" onChange={handleChange('collMsg')} />
            <button type="submit">Search</button>
        </form>
    );

    return (
        <Layout
            title="News Page built with Next Js"
            footer="This is the footer for the news page."
        >
            <Head>
                <title>News</title>
            </Head>
            {
                collMsg && <h1>{collMsg}</h1>
            }
            <h1>News Page</h1>
            {sourceFrom()}
            <hr />
            <div>
                {news
                    .filter((n) => n.url)
                    .map((n, i) => (
                        <div key={i}>
                            <Link href={n.url} target="_blank">
                                {n.title}
                            </Link>
                        </div>
                    ))}
            </div>
        </Layout>
    );
};

News.getInitialProps = async ({ query }) => {
    let news;
    try {
        const res = await fetch(
            `https://hn.algolia.com/api/v1/search?query=${query.query}`
        );
        news = await res.json();
    } catch (error) {
        console.log(error);
        news = null;
    }
    return { news: news.hits };
}

export default News;
