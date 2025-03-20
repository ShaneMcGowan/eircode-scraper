
export const getKey = async () => {
  // identity
  const getIdentityUrl = `https://api-finder.eircode.ie/Latest/findergetidentity`;
  
  const identityResponse = await fetch(getIdentityUrl);
  console.log(identityResponse);
  
  const identityData = await identityResponse.json();
  console.log(identityData);

  return identityData.key;
}

/*
const sampleResponse = {
  ga4Id: "",
  key: "",
  trackingId: "",
  value: "",
};
*/