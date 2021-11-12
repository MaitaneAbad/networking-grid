const CompanyCard = (props) => {
  return (
    <>
      <div className='list__card--item'>
        <p className='list__card--item__name'> {props.companyData.name}.</p>
        <p className='list__card--item__year'>
          Fundada en: {props.companyData.founded}.
        </p>
      </div>
      <div className='list__card--characteristics'>
        <p className='list__card--characteristics__industry'>
          {props.companyData.industry}.
        </p>
        <div className='list__card--characteristics__size'>
          <p className='list__card--characteristics__size--contain'>
            {props.companyData.size}.
          </p>
        </div>
      </div>
      <div className='list__card--link'>
        <a
          className='list__card--link__website'
          target='_blank'
          rel='noreferrer'
          href={'http://' + props.companyData.website}
        >
          Website
        </a>
      </div>
    </>
  );
};
export default CompanyCard;
