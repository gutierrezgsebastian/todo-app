import axios from "axios";

const httpGetTareas = async (url, estado) => {
  await axios
    .get(url)
    .then((response) => estado(response.data))
    .catch((error) => console.log(error.message));
};

export { httpGetTareas };

const httpDeleteTareas = async (url, estado) => {
  await axios
    .delete(url)
    .then((response) => estado(response.data))
    .catch((error) => console.log(error.message));
};

export { httpDeleteTareas };
