import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostImage } from "../api/backend";


function DownloadPage() {
    const location = useLocation();
    const {data, image} = location.state;

    const [servedImage, setServedImage] = useState();
    
    useEffect(() => {
        PostImage(data, image).then(img => setServedImage(img.image));
    }, [data, image])

    return (
        <div className="download-panel">
            {servedImage && <img src={servedImage} alt="b"/> }
        </div>
    )
}


export default DownloadPage;