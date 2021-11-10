import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';
import CompanyList from './CompanyList';
import Filters from './Filters';

const App = () => {
  const [data, setData] = useState([]);
  const [searchIndustry, setSearchIndustry] = useState('all');

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  const handleReset = () => {
    setSearchIndustry('all');
  };
  const handleSearchIndustry = (ev) => {
    setSearchIndustry(ev.currentTarget.value);
  };
  const filterIndustryData = data
    .filter(
      (industryTipe) =>
        searchIndustry === 'all' || industryTipe.industry === searchIndustry
    )
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  return (
    <>
      <Filters
        data={data}
        handleForm={handleForm}
        searchIndustry={searchIndustry}
        handleSearchIndustry={handleSearchIndustry}
        handleReset={handleReset}
      />
      <CompanyList data={filterIndustryData} />
    </>
  );
};

export default App;
