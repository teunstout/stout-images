import { UploadStatus } from "constants/enum/status";
import { FC } from "react";
import Image from "next/image";
import css from "./uploadFileTile.module.scss";

interface Props {
	fileName: string;
	removeTile?: () => void;
	status?: UploadStatus;
}

export const UploadFileTile: FC<Props> = ({ fileName, removeTile, status }) => {
	const removeable = UploadStatus.failed === status || !status;

	const getBorderColor = (): string => {
		switch (status) {
			case UploadStatus.success:
				return "green";
			case UploadStatus.failed:
				return "red";
			default:
				return "inherit";
		}
	};

	return (
		<div
			className={`${css.tile} ${
				removeable ? css.tileHover : ""
			} ${getBorderColor()}`}
			onClick={removeable ? removeTile : undefined}
		>
			{UploadStatus.pending === status && (
				<Image
					src="/svg/spinning.svg"
					alt="spinner"
					width={32}
					height={32}
					objectFit="cover"
				/>
			)}

			{UploadStatus.pending === status ? (
				<p>{fileName}</p>
			) : (
				<p className={`${css.span2}`}>{fileName}</p>
			)}
		</div>
	);
};
