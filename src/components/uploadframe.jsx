import classNames from "classnames";
import ImageUploading from "react-images-uploading";

function UploadFrame({ image, setImage }) {
	return (
		<div className="upload-container">
			<ImageUploading value={image} onChange={setImage} dataURLKey="data_url">
				{({
					imageList,
					onImageUpload,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					<div className="upload__image-wrapper">
						<div className="upload__image-container">
							{!imageList[0] ? (
								<div
									className={classNames("upload__image-upload", {
										"upload__image-upload-active": isDragging,
									})}
									{...dragProps}
								>
									<button onClick={onImageUpload}>Select Image</button>
									{isDragging ? (
										<div id="preview-text">drop the image here</div>
									) : (
										<div id="preview-text">or drag and drop one here</div>
									)}
								</div>
							) : (
								<div
									className={classNames("upload__image-preview", {
										"upload__image-preview-active": isDragging,
									})}
									{...dragProps}
								>
									<img src={imageList[0].data_url} alt="uploaded" />
								</div>
							)}
							{imageList[0] && (
								<div className="upload__image-section">
									<button id="upload-button" onClick={onImageUpload}>
										Select another image
									</button>
									<button id="remove-button" onClick={onImageRemove}>
										Remove image
									</button>
								</div>
							)}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
}

export default UploadFrame;
