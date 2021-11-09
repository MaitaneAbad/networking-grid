import '../styles/layout/main.scss';
const CompanyList = (props) => {
  const list = props.data.map((companyData, i) => {
    console.log(i);
    console.log(companyData.website);

    return (
      <>
        <li className='companyList' key={i}>
          <p>{companyData.name}</p>
          <p>{companyData.size}</p>
          <p>{companyData.founded}</p>
          <a
            target='_blank'
            rel='noreferrer'
            href={'http://' + companyData.website}
          >
            {companyData.website}
          </a>
        </li>
      </>
    );
  });
  return (
    <>
      {props.data.length !== 0 ? (
        <ul className='list'>{list}</ul>
      ) : (
        <p>{`No exite ningun tipo de empresa con este filtro: ${props.data.name}.`}</p>
      )}
    </>
  );
};
export default CompanyList;
