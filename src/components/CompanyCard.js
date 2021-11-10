const CompanyCard = (props) => {
  return (
    <>
      <div className='list__card--item'>
        <p className='list__card--item__name'> {props.companyData.name}.</p>
        <p className='list__card--item__year'> {props.companyData.founded}.</p>
      </div>
      <div className='list__card--characteristics'>
        <p className='list__card--characteristics__industry'>
          {props.companyData.industry}
        </p>
        <p className='list__card--characteristics__size'>
          {props.companyData.size}.
        </p>
      </div>

      <a
        className='list__card--link'
        target='_blank'
        rel='noreferrer'
        href={'http://' + props.companyData.website}
      >
        Website
      </a>
    </>
  );
};
export default CompanyCard;
