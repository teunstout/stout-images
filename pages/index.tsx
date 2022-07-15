import type { NextPage } from "next";
import Head from "next/head";
import css from "./index.module.scss";

interface Props {}

const Home: NextPage<Props> = () => {
	return (
		<main className={css.main}>
			<Head>
				<title>Gallery</title>
				<meta name="Gallery" content="All pictures accessible" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</main>
	);
};

export default Home;
