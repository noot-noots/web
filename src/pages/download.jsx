import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostImage } from "../api/backend";
import { download } from "../util/downloadFile";

function DownloadPage() {
  const location = useLocation();
  const { data, image } = location.state;

  const [servedImage, setServedImage] = useState();

  useEffect(() => {
    PostImage(data, image).then((img) => {
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
          <img src={servedImage} alt="b" />
        ) : (
          <div className="processing-container">
            <div id="process-text">Processing Image...</div>
          </div>
        )}
      </div>
      {servedImage && (
        <div className="download-frame">
          <button
            className="download-button"
            onClick={() => download(servedImage)}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}

export default DownloadPage;
