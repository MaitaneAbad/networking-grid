const FilterByIndustry = (props) => {
  console.log(props.data.industry !== null);
  const industryTipe = props.data.map((companyData, i) => {
    console.log(!companyData.industry);
    return (
      <input
        type='button'
        value={companyData.industry}
        key={i}
        onClick={props.handleSearchIndustry}
      />
    );
  });

  return (
    <>
      {/* <label htmlFor='industry' className='labelName'>
        Industria
      </label>
      <select
        className='selectSpecies'
        name='industry'
        id='industry'
        value={props.searchIndustry}
        onChange={props.handleSearchIndustry}
      >
        <option value='all'>Todos</option>
        <>{industryTipe}</>
      </select> */}
      {industryTipe}
    </>
  );
};

export default FilterByIndustry;
