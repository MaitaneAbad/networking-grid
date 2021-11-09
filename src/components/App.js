import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';
import CompanyList from './CompanyList';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <CompanyList data={data} />
    </>
  );
};

export default App;
