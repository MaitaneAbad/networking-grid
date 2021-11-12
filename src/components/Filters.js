import FilterByIndustry from './FilterByIndustry';

const Filters = (props) => {
  return (
    <>
      <form className='header__form' onSubmit={props.handleForm}>
        <FilterByIndustry
          data={props.data}
          searchIndustry={props.filterIndustry}
          handleSearchIndustry={props.handleSearchIndustry}
        />
      </form>
      <form className='header__formReset'>
        <input
          type='button'
          className='header__formReset--buttonReset'
          onClick={props.handleReset}
          value='Restablecer Filtros'
        />
      </form>
    </>
  );
};
export default Filters;
