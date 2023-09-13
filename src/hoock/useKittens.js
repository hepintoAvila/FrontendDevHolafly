// @flow
import { useEffect, useState } from 'react';
import apiClient from '../Kitten/apiClient';


const useKittens = () => {
  const [kittens, setKittens] = useState([]);
  const [loadings, setLoading] = useState(true);
  const [isopenModal, setIsMenuOpened] = useState(false);
  const [itemsDetal, setDetal] = useState({});
  const openModal = (obj) => {
    setDetal(obj)
    setIsMenuOpened(!isopenModal);
    setTimeout(function () {
      setLoading(!loadings);
    }, 2000);

  };
  const closeModal = () => {
    setDetal({
      name: '',
      description: '',
      imageFileName: '',
      gender: '',
      age: ''
    })
    setIsMenuOpened(false);
    setLoading(false);
  };

  useEffect(() => {
    apiClient.get('/kitten') // Assumes your API is running on the same server
      .then((response) => {
        setKittens(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching kittens:', error);
      }).finally(() => {
        setLoading(false);
      });
  }, []);
  return { kittens, loadings, openModal, isopenModal, itemsDetal, closeModal };
};

export default useKittens;
