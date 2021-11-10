import '../styles/layout/main.scss';
import CompanyCard from './CompanyCard';
const CompanyList = (props) => {
  console.log(props.data.name);
  const list = props.data.map((companyData, i) => {
    return (
      <>
        <li className='companyList' key={i}>
          <CompanyCard companyData={companyData} />
        </li>
      </>
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
