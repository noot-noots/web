import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostImage } from "../api/backend";


function DownloadPage() {
    const location = useLocation();

    const [image, setImage] = useState();

    useEffect(() => {
        PostImage(location.state.data).then(setImage);
    }, [location.state.data])

    return (
        <div className="download-panel">

        </div>
    )
}


export default DownloadPage;