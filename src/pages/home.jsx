import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadFrame from "../components/uploadframe";

function Home() {
	const navigate = useNavigate();
	const [image, setImage] = useState([]);

	return (
		<div className="home-container">
			<div className="app-step">Upload the image</div>
			{/* <div className="title">Upload Image</div> */}
			<div className="image-container">
				<div className="image-upload">
					<UploadFrame image={image} setImage={setImage} />
				</div>
				<div className="next-panel">
					{image[0] && (
						<button
							className="proceed"
							onClick={() =>
								{	console.log(image[0])
									navigate("/edit", { state: { image: image[0].data_url, file: image[0].file } })}
							}
						>
							Proceed with this image
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
