import { useLocation } from "react-router-dom";
import EditFrame from "../components/editframe";

function Edit() {
    const location = useLocation();
    return (
        <div className="edit-panel">
            <img src={location.state.image} alt="this"/>
            <div className="transform-container">
				<div className="app-step">Edit the image</div>
				<EditFrame image={location.state.image} />
			</div>
        </div>
    )
}


export default Edit;