import { FC } from "react";
import Image from "next/image";
import css from "./sideNav.module.scss";
import Link from "next/link";

interface Props {}

export const SideNav: FC<Props> = () => {
	return (
		<nav className={css.navigation}>
			{/* TODO: Replace when authentication */}
			{false && (
				<Link href="">
					<a className={css.upload}>
						<Image
							src="/svg/upload.svg"
							alt="Japanese God Raijin"
							width={36}
							height={36}
						/>
					</a>
				</Link>
			)}

			<header className={css.header}>
				<Image
					src="/svg/god-raijin.svg"
					alt="Japanese God Raijin"
					width={96}
					height={96}
					className={css.raijin}
				/>
			</header>

			<div className={css.items}>
				<Link href="/">
					<a className={css.item}>
						<p>Home</p>
					</a>
				</Link>
				<Link href="/gallery">
					<a className={css.item}>
						<p>Pictures </p>
					</a>
				</Link>
				<Link href="/stories">
					<a className={css.item}>
						<p>Stories</p>
					</a>
				</Link>
			</div>

			<footer>{/* TODO: Socials */}</footer>
		</nav>
	);
};
