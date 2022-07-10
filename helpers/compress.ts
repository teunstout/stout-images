export const compressImage = (
	fileName: string,
	image: HTMLImageElement,
	scaleDown: number = 0.5
) => {
	// resizing the image
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	if (!context) throw Error("Canvas context not found");

	// New Size of the image
	const canvasWidth = image.naturalWidth * scaleDown;
	const canvasHeight = image.naturalHeight * scaleDown;

	// Set canvas
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
	context.drawImage(image, 0, 0, canvasWidth, canvasHeight);

	// Convert to base so sending and unpacking is easy
	const base64Image = canvas.toDataURL("image/jpeg").split(";base64,")[1];
	writeBase64ToServer(fileName, base64Image);
};

const writeBase64ToServer = (fileName: string, base64Image: string) => {
	// TODO: Replace with real live string
	fetch("http://localhost:3000/api/upload", {
		method: "POST",
		body: JSON.stringify({ fileName: fileName, base64Image: base64Image }),
	});
};
