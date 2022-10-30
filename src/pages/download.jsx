import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostImage } from "../api/backend";


function DownloadPage() {
    const location = useLocation();
    const {data, image} = location.state;

    const [image2, setImage2] = useState();
    
    useEffect(() => {
        PostImage(data, image).then(_ => console.log(_));
    }, [data, image])

    return (
        <div className="download-panel">
            <img src={image2} alt="b"/>
        </div>
    )
}


export default DownloadPage;