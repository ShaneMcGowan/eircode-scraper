
export const getEircode = async (apiKey, routingKey, uniqueIdentifier) => {
  const eircode = `${routingKey}${uniqueIdentifier}`;
  const key = `${apiKey}`;
  const language = `en`;
  const getGeographicAddress = true;
  const url = `https://api-finder.eircode.ie/Latest/finderautocomplete?key=${key}&address=${eircode}&language=${language}&geographicAddress=${getGeographicAddress}`;
  
  console.log(`Making request for ${eircode}`);
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  // console.log(data);

  return data;
}