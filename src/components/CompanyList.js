import '../styles/layout/companyList.scss';
import CompanyCard from './CompanyCard';

const CompanyList = (props) => {
  const list = props.data.map((companyData) => {
    return (
      <li className='list__card' key={companyData.id}>
        <CompanyCard companyData={companyData} />
      </li>
    );
  });
  return (
    <>
      {props.data.length !== 0 ? (
        <ul className='list'>{list}</ul>
      ) : (
        <p>{`No exite ningun tipo de empresa con ese filtro.`}</p>
      )}
    </>
  );
};
export default CompanyList;
