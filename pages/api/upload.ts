// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type ResponseMessage = {
	message?: string;
};

type Data = {
	fileName: string;
	base64Image: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseMessage>
) {
	switch (req.method) {
		case "POST":
			post(res, req);
		default:
			error(res, req);
	}
}

const post = (res: NextApiResponse<ResponseMessage>, req: NextApiRequest) => {
	const { fileName, base64Image } = JSON.parse(req.body) as Data;
	var buf = Buffer.from(base64Image, "base64");
	var path = `${process.cwd()}/utils/uploads/${fileName}.jpeg`;
	console.log(path);

	// Write to filesystem
	fs.writeFile(path, buf, (err: NodeJS.ErrnoException | null) => {
		if (err) res.status(500).json({ message: `Fuck image could not be saved` });
	});
};

const error = (res: NextApiResponse<ResponseMessage>, req: NextApiRequest) => {
	res.status(405).json({ message: `No fucking ${req.statusMessage} methods!` });
};
