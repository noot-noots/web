import { useState } from "react";
import { useForm } from "react-hook-form";

function EditFrame({ image }) {
	const { register, handleSubmit } = useForm({
        defaultValues: {
            resizeWidth: 1080,
            resizeHeight: 1920
        }
    });
	const [data, setData] = useState("");

	return (
		<div className="edit-container">
			<form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
				<div className="edit__resize-container">
					<div className="edit__resize-heading">Resize</div>
					<div className="edit__resize-options">
						<div className="edit__resize">
							<div className="edit__panel edit__resize-config">
                                <div id=" resize-w">
                                    <div id="config-text">Width (px)</div>
                                    <input type="number" {...register("resizeWidth")} placeholder="Width" min="1"/>
                                </div>

                                <div id="resize-h">
                                    <div id="config-text">Height (px)</div>
                                    <input type="number" {...register("resizeHeight")} placeholder="Height" min="1"/>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default EditFrame;
