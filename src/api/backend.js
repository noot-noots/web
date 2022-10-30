import axios from "axios";
import FormData from 'form-data';

const url = "http://13.210.183.226/alter-image";

export const PostImage = async (data, image) => {
  var form = new FormData();
  // form.append("img", image);

  const nUrl = CreateQuery(data);
  console.log(nUrl);
  console.log(image);

  // return await axios.post(nUrl, form,
  //   {
  //     headers: {'Content-Type': 'multipart/form-data'}
  //   }
  //   ).then((res) => {
  //   console.log(res.data);
  // });

  return await fetch(image).then(res => res.blob()).then(blob => {
    form.append('image', blob);
    fetch(nUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: form,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  })
  
  
  // fetch(nUrl, {
  //   method: "POST",
  //   body: form,
  // })
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));

  // return await fetch (`${url}/test`, {
  //     method: "GET"
  // }).then(_ => console.log(_));
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
