import axios from "axios";
import FormData from "form-data";

const url = "http://3.25.72.6/alter-image";

export const PostImage = async (data, image) => {
  var form = new FormData();
  form.append("image_form", image);

  const nUrl = CreateQuery(data);
  console.log(nUrl);
  console.log(image);

  return await axios
    .post(nUrl, form)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return null;
    });
};

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
