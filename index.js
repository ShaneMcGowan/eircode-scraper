import { createDirectoryAndFile } from './helpers/create-folder.js';

const eircode = `D16R902`;
const key = `_e80355fb-732a-45fe-b725-15c909850bae`; // TODO: how do we generate / get these? what are they valid for
const language = `en`;
const getGeographicAddress = true;

const url = `https://api-finder.eircode.ie/Latest/finderautocomplete?key=${key}&address=${eircode}&language=${language}&geographicAddress=${getGeographicAddress}`;

const response = await fetch(url);
const data = await response.json();
console.log(data.options)

// ROUTING_KEYS[0].routingKey;

createDirectoryAndFile();