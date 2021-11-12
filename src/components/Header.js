import Filters from './Filters';
import '../styles/layout/header.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <h1 className='header__title'>Portal de búsqueda de empresas</h1>
      <Filters
        data={props.data}
        handleForm={props.handleForm}
        searchIndustry={props.searchIndustry}
        handleSearchIndustry={props.handleSearchIndustry}
        handleReset={props.handleReset}
      />
    </div>
  );
};
export default Header;
