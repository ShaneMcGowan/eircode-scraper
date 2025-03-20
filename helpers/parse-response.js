export const createEirCode = (routingKey, uniqueIdentifier) => {
  return `${routingKey}${uniqueIdentifier}`;
}

export const handleResponse = (object) => {
  if(object?.message === 'Internal server error'){
    console.log('REQUEST FAILED');
    return;
  }

  if(object?.error){
    console.log(object?.error?.text);
    process.exit(1);
    return;
  }

  console.log(`${object.totalOptions} values found`);
  if(object.totalOptions === 0){
    return;
  }

  console.log(`${options[0]}`);
}
