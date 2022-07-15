import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import css from "./index.module.scss";
import fs from "fs";
import { RAW_HEIGHT, RAW_WIDTH } from "@utils/constants/image";

interface Props {
	images: string[];
}

const Gallery: NextPage<Props> = ({ images }) => {
	const HEIGHT = 256;

	// useEffect(() => {
	// 	fetch(images[0]).then(async (res) => {
	// 		uploadImage(await res.blob());
	// 		console.log("done");
	// 	});
	// });

	const widthCalc = (mult: number = 1) => {
		return (HEIGHT / RAW_HEIGHT) * RAW_WIDTH * mult;
	};

	return (
		<main className={css.main}>
			<Head>
				<title>Gallery</title>
				<meta name="Gallery" content="All pictures accessible" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{images.map((img: string, i: number) => (
				<Image
					key={img}
					src={`/test/${img}`}
					alt="picture"
					height={HEIGHT}
					width={widthCalc()}
					layout="fixed"
					objectPosition="center center"
					objectFit="cover"
					quality={60}
				/>
			))}
		</main>
	);
};

// TODO: Remove when images are retrieved from server
export async function getServerSideProps() {
	const images: string[] = fs
		.readdirSync(`${process.cwd()}/public/test`)
		.map((f: string) => f);

	return {
		props: {
			images,
		},
	};
}

export default Gallery;
