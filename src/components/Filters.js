import FilterByIndustry from './FilterByIndustry';

const Filters = (props) => {
  return (
    <form onSubmit={props.hanfleForm}>
      <FilterByIndustry
        data={props.data}
        searchIndustry={props.filterIndustry}
        handleSearchIndustry={props.handleSearchIndustry}
      />
    </form>
  );
};
export default Filters;
