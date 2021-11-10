const callToApi = () => {
  return fetch(
    `https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json`
  )
    .then((response) => response.json())
    .then((json) => {
      const companies = json.map((data) => {
        return {
          name: data.name,
          founded: data.founded,
          id: data.id,
          industry: data.industry,
          size: data.size,
          website: data.website,
        };
      });
      return companies;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default callToApi;
