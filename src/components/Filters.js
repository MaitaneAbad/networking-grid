import FilterByIndustry from './FilterByIndustry';

const Filters = (props) => {
  return (
    <form onSubmit={props.handleForm}>
      <FilterByIndustry
        data={props.data}
        searchIndustry={props.filterIndustry}
        handleSearchIndustry={props.handleSearchIndustry}
      />
      <input type='reset' onClick={props.handleReset} />
    </form>
  );
};
export default Filters;
