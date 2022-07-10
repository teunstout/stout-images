import { UploadStatus } from "constants/enum/status";
import { FC } from "react";
import Image from "next/image";
import css from "./uploadFileTile.module.scss";

interface Props {
	fileName: string;
	status?: UploadStatus;
}

export const UploadFileTile: FC<Props> = ({ fileName, status }) => {
	if (!status) {
		return <p>{fileName}</p>;
	}

	const getSvg = (): string => {
		switch (status) {
			case UploadStatus.success:
				return "/svg/success.svg";
			case UploadStatus.failed:
				return "/svg/failed.svg";
			default:
				return "/svg/spinner.svg";
		}
	};

	return (
		<div className={css.tile}>
			<Image
				src={getSvg()}
				alt="spinner"
				width={32}
				height={32}
				objectFit="cover"
			/>
			<p>{fileName}</p>
		</div>
	);
};
