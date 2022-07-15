import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { SideNav } from "@components/sideNav/sideNav";
import { SideNavWrapper } from "@components/sideNav/wrapper/wrapper";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="content">
			<SideNavWrapper>
				<SideNav />
			</SideNavWrapper>

			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
