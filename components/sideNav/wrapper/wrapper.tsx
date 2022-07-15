import Image from "next/image";
import { FC, useState } from "react";
import css from "./wrapper.module.scss";

interface Props {
	children: React.ReactElement;
}

export const SideNavWrapper: FC<Props> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<div className={css.menu} onClick={() => setOpen(true)}>
				<Image src="/image/menu.png" alt="menu icon" width={24} height={24} />
			</div>
			<div className={`${css.wrapper} ${open ? css.wrapperOpen : ""}`}>
				<div className={css.back} onClick={() => setOpen(false)}>
					<Image
						src="/image/close.png"
						alt="close icon"
						width={24}
						height={24}
					/>
				</div>
				{children}
			</div>
		</>
	);
};
