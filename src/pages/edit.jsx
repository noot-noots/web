import { useLocation } from "react-router-dom";
import EditFrame from "../components/editframe";

function Edit() {
    const location = useLocation();
    return (
        <div className="edit-panel">
            <div className="transform-container">
				<div className="app-step">Edit the image</div>
                <div className="image-preview">
                    <img src={location.state.image} alt="this"/>
                </div>
                
				<EditFrame image={location.state.image} file={location.state.file} />
			</div>
        </div>
    )
}


export default Edit;