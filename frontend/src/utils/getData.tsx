import axios from 'axios';

const getProducts = async () => {
  const promise = axios.get('http://localhost:5000/api/v1/products');

  await promise
    .then((res) => {
      console.log(res.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getProducts };
