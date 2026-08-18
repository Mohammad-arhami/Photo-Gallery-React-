import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react"
import { db , storage } from "../Firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const useStorage = (file) => {   
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {

        // refrences
        const storageRef = ref(storage , file.name);
        const collectionRef = collection(db , 'Images');

        const uploadTask = uploadBytesResumable(storageRef , file)
        const unsub = uploadTask.on('state_change' , (snapshot) => {
            const precentage = (snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setProgress(precentage);
        }, (err) => {
            setError(err)
        }, async () => {
            const downloadUrl = await getDownloadURL(storageRef);
            setUrl(downloadUrl);

            const createdAt = serverTimestamp();
            await addDoc(collectionRef , {url : downloadUrl} , createdAt );
        })

        return () => unsub();
    } , [file])

    return {progress, url, error};
}
