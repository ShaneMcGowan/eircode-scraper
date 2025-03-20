export const createEirCode = (routingKey, uniqueIdentifier) => {
  return `${routingKey}${uniqueIdentifier}`;
}