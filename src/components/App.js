import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';
import CompanyList from './CompanyList';

import Header from './Header';

const App = () => {
  const [data, setData] = useState([]);
  const [searchIndustry, setSearchIndustry] = useState('all');
  const [buttonHidden, setButtonHidden] = useState('hidden');

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
  const handleShowAll = () => {
    setSearchIndustry('all');
  };
  const handleShowFilter = () => {
    if (buttonHidden === '') {
      setButtonHidden('hidden');
    } else {
      setButtonHidden('');
    }
    handleShowAll();
  };
  return (
    <>
      <Header
        data={data}
        handleForm={handleForm}
        searchIndustry={searchIndustry}
        handleSearchIndustry={handleSearchIndustry}
        handleReset={handleReset}
        buttonHidden={buttonHidden}
        handleShowFilter={handleShowFilter}
        handleShowAll={handleShowAll}
      />

      <CompanyList data={filterIndustryData} />
    </>
  );
};

export default App;
