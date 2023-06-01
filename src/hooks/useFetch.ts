import {useState, useEffect} from 'react';
import {HttpClient} from '../utils';
import fakeData from './fakedata.json';
type QueryParams= {
  [key: string]: any;
}

type UseFetchResult= {
  data: any;
  error: boolean;
  loading: boolean;
  refetch: () => void;
}
const useFetch = (endPoint:string, query:QueryParams, method = 'GET') => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const options = {
    method,
    url: endPoint,
    params: {
      ...query,
    },
  };
  const fetchData = async () => {
    setError(false);
    setLoading(true);
    try {
      // const res = await HttpClient.request(options)
      //fake data for this month
      //https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch
      const res = fakeData;
      setData(res?.data?.data);
    } catch (err) {
      console.log(err, 'Error fetching data from endPoint: ' + endPoint);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    fetchData();
  };
  return {data, error, loading, refetch};
};
export default useFetch;
