import { createDirectoryAndFile } from "./helpers/create-folder.js";
import { ROUTING_KEYS } from "./constants/index.js";
import { handleResponse } from "./helpers/parse-response.js";
import { generateStringByIndex, totalCombinations } from './helpers/generate-area-code.js';
import { getEircode } from "./helpers/get-eircode.js";
import { getKey } from './helpers/get-key.js';

const key = await getKey();

for(let i = 0; i < totalCombinations; i++){
  // if(i === 20){
  //   throw Error(`Enough for now`);
  // }

  const uniqueIdentifier = generateStringByIndex(i);
  const data = await getEircode(key, "F91", uniqueIdentifier);
  handleResponse(data);
}
