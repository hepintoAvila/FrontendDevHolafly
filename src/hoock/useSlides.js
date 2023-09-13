// @flow
import { useEffect, useState } from 'react';
import apiClient from '../Kitten/apiClient';


const useSlides = () => {
  const [items, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient.get('/kitten/lists') // Assumes your API is running on the same server
      .then((response) => {
        setSlides(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Slides:', error);
        setLoading(false);
      });
  }, []);

  return { items, loading };
};
export default useSlides;
