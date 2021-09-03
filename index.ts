// Import stylesheets
import { RootObject } from './intefaces/rootObject.interface';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
let obj: RootObject;
const num: number = 5;

let api: any = fetch('https://api.punkapi.com/v2/beers/242')
  .then(response => response.json())
  .then(data => {
    console.log(data[0]);
    obj = data[0];
    appDiv.innerHTML = `<h1>Name: ${obj.name}</h1>
      <h4>Description: ${obj.description}</h4>
      <h4>Ph: ${obj.ph}</h4>
      <h4>brewers_tips: ${obj.brewers_tips}</h4>   
    `;
  });
