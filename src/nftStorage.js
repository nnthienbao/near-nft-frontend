import axios from "axios";

const END_POINT = "https://api.nft.storage/upload";
const TOKEN_API =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMxRTVhZTIyN0ZhZWUyZDU4QTA2N2VBM0E4N0NBZDdkZjRkRjE5NzEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzY2MDM2Nzg5NCwibmFtZSI6Im5lYXItbmZ0In0.yIWGBmq1JM2uUAe9_Zf3oujVCQC_VO61J8xLXp5FP3E";

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

export const uploadToStorage = ({fileUpload, title, des}) => {
  return readFileAsync(fileUpload).then((data) => {
    return axios({
      method: "POST",
      url: END_POINT,
      data: data,
      headers: {
        "Content-Disposition": `form-data; name="${fileUpload.name}"; filename="${fileUpload.name}`,
        "Authorization": `Bearer ${TOKEN_API}`,
      },
    });
  }).catch(error => {
    return Promise.reject(error);
  });
};
