import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function EditFrame({ image, file }) {
  const navigate = useNavigate();

  // Creates a form from useForm package
  const { register, handleSubmit } = useForm({
    defaultValues: {
      rotate: "0",
    },
  });

  // On Submit, navigates to the '/download' page and passes in the data.
  const onSubmit = (data) => {
	var ndata = {
    rotate: data.rotate ? data.rotate : "0",
    resize: (data.resizeWidth || data.resizeHeight) ? `${(data.resizeWidth || null)}x${data.resizeHeight || null}` : null,
    flip: data.flipX || null,
    flop: data.flipY || null,
    sharpen: data.sharpen || null,
    blur: data.blur || null
  };
  navigate('/download', {state: {data: ndata, image: file}});
	
  }

  // setData(JSON.stringify(data)
  return (
    <div className="edit-container">
      <form className="edit-form">
        <div className="edit__resize-container">
          <div className="edit__heading">Resize</div>
          <div className="edit__resize-options">
            <div className="edit__resize">
              <div className="edit__panel edit__resize-config">
                <div id=" resize-w">
                  <div id="config-text">Width (px)</div>
                  <input type="number" {...register("resizeWidth")} min="1" />
                </div>

                <div id="resize-h">
                  <div id="config-text">Height (px)</div>
                  <input type="number" {...register("resizeHeight")} min="1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit__rotate-container">
          <div className="edit__heading">Rotate</div>
          <div className="edit__rotate-options">
            <div className="edit__rotate">
              <div className="edit__panel edit__rotate-config">
                <div id="rotate-config">
                  <div id="config-text">Degrees</div>
                  <input type="number" {...register("rotate")} min="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit__flip-container">
          <div className="edit__heading">Flip</div>
          <div className="edit__flip-options">
            <div className="edit__flip">
              <div className="edit__panel edit__flip-config">
                <div id="flipX">
                  <input type="checkbox" {...register("flipX")} />
                  <span>Flip Horizontally</span>
                </div>
                <div id="flipY">
                  <input type="checkbox" {...register("flipY")} />
                  <span>Flip Vertically</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit__sharp-blur-container">
          <div className="edit__heading">Sharpen and Blur</div>
          <div className="edit__sharp-blur-options">
            <div className="edit__sharp-blur">
              <div className="edit__panel edit__sharp-blur-config">
                <div id="sharp-config">
                <div id="config-text">Sharpen Image</div>
                  <input type="number" {...register("sharpen")} min="0" max="10" />
                  
                </div>
                <div id="blur-config">
                <div id="config-text">Blur Image</div>
                  <input type="number" {...register("blur")} min="0" max="10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit__buttons">
          <button className="home-button" onClick={() => navigate("/")}>
            Select another image
          </button>
          <button
            className="submit"
            type="submit"
            onClick={handleSubmit((data) => onSubmit(data))}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFrame;
