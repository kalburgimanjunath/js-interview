// Import stylesheets
import './style.css';

let arr = [
  { id: 1, name: 'xyz' },
  { id: 2, name: 'xyz' },
  { id: 3, name: 'xyz' },
  { id: 4, name: 'xyz' },
  {
    id: 5,
    name: 'xyz',
    ement: [
      {
        id: 1,
        name: 'xyz',
      },
    ],
  },
];
let test = arr.find((item) => {
  return item.ement;
});
console.log(test);
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
