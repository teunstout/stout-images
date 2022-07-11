import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

const firebaseConfig = {
	storageBucket: "gs://stout-images.appspot.com/",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadFileBlob = (filename: string, file: Blob) => {
	const storageRef = ref(storage, filename);

	uploadBytes(storageRef, file).then((snapshot) => {
		console.log("Uploaded a blob or file!");
	});
};

export const uploadFileBase64 = (filename: string, base64: string) => {
	const storageRef = ref(storage, filename);

	uploadString(storageRef, base64, "base64").then((snapshot) => {
		console.log("Uploaded a base64 string!");
	});
};
