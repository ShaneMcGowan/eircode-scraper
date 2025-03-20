import { createDirectoryAndFile } from './helpers/create-folder.js';
import { ROUTING_KEYS } from './constants/index.js';

const eircode = ``;
const key = ``; // TODO: how do we generate / get these? what are they valid for
const language = `en`;
const getGeographicAddress = true;

const url = `https://api-finder.eircode.ie/Latest/finderautocomplete?key=${key}&address=${eircode}&language=${language}&geographicAddress=${getGeographicAddress}`;

const response = await fetch(url);
const data = await response.json();
console.log(data.options)

// ROUTING_KEYS[0].routingKey;

ROUTING_KEYS.forEach(value => {
  createDirectoryAndFile(
    'data',
    `${value.routingKey}.json`,
    `{}`
  );
});