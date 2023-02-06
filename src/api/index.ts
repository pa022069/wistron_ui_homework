import axios from "axios";

export const onSubmitFormApi = async (data: any) => {
  const response = await axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    url: `http://localhost:8080/`,
    data,
  });
  return response;
};
