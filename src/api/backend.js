import axios from "axios";
import FormData from "form-data";

const url = "/api/alter-image";

// Sends a post request to the server to retrieve the image
export const PostImage = async (data, image) => {
  var form = new FormData();
  form.append("image_form", image);

  const nUrl = CreateQuery(data);

  return await axios
    .post(nUrl, form)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

// Creates a query based on the user input
const CreateQuery = (data) => {
  var nUrl = `${url}?rotate=${data.rotate}`;

  Object.entries(data).map(([key, value]) => {
    if (key !== "rotate" && value !== null) {
      nUrl += `&${key}=${value}`;
    }
    return nUrl;
  });
  return nUrl;
};
