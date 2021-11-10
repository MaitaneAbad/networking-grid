const FilterByIndustry = (props) => {
  const industryTipe = props.data.map((companyData, i) => {
    return (
      <input
        type='button'
        value={companyData.industry}
        key={i}
        onClick={props.handleSearchIndustry}
      />
    );
  });
  return <> {industryTipe} </>;
};
export default FilterByIndustry;
