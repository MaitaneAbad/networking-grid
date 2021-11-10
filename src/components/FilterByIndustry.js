const FilterByIndustry = (props) => {
  const industryTipe = props.data.map((companyData, i) => {
    return (
      <option key={i} value={companyData.industry}>
        {companyData.industry}
      </option>
    );
  });
  return (
    <>
      <label htmlFor='industry' className='labelName'>
        Especie
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
      </select>
    </>
  );
};

export default FilterByIndustry;
