const CompanyCard = (props) => {
  return (
    <>
      <p>Nombre de la empresa: {props.companyData.name}.</p>
      <p>Tamaño de la empresa: {props.companyData.size}.</p>
      <p>Año de su fundación: {props.companyData.founded}.</p>
      <a
        target='_blank'
        rel='noreferrer'
        href={'http://' + props.companyData.website}
      >
        {props.companyData.website}
      </a>
    </>
  );
};
export default CompanyCard;
