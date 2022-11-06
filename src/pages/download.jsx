import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PostImage } from "../api/backend";
// import { download } from "../util/downloadFile";

function DownloadPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, image } = location.state;

  const [servedImage, setServedImage] = useState();

  useEffect(() => {
    PostImage(data, image).then((img) => {
      console.log(img);
      if (img) {
        setServedImage(img.image);
        return;
      }
      return "0";
    });
  }, [data, image]);

  return (
    <div className="download-panel">
      <div className="app-step">Download</div>
      <div className="download-image image-preview">
        {servedImage ? (
          <img src={servedImage} alt="loadfailed" />
        ) : (
          <div className="processing-container">
            <div id="process-text">Processing Image...</div>
          </div>
        )}
      </div>
      {servedImage && (
        <div className="download-frame">
          <button className="home-button" onClick={() => navigate("/")}>
            Select new image
          </button>
          <button
            className="download-button"
            onClick={() => window.open(servedImage, '_blank', 'noopener,noreferrer')}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}

export default DownloadPage;
