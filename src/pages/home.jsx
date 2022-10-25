import { useState } from "react";
import EditFrame from "../components/editframe";
import UploadFrame from "../components/uploadframe";

function Home() {
	const [image, setImage] = useState([]);

	return (
		<div className="home-container">
			<div className="app-step">Step 1: Upload the image</div>
			{/* <div className="title">Upload Image</div> */}
			<div className="image-container">
				<div className="image-upload">
					<UploadFrame image={image} setImage={setImage} />
				</div>
                <div className="image-edit"></div>
			</div>
			<div id="divider" />
			<div className="transform-container">
                <div className="app-step">Step 2: Edit the image</div>
                <EditFrame image={image} />
            </div>
		</div>
	);
}

export default Home;
