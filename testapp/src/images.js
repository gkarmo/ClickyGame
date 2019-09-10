import React from "react";
// import "./style.css";

// Code provided from https://www.freecodecamp.org/forum/t/importing-images-in-react/206974/6
// We can use the async keyword before a function name to wrap the return value of this function in a Promise. We can use the await keyword (in an async function) to wait for a promise to be resolved or rejected before continuing code execution in this block.

// async function imageLoader() {
//   const request = await fetch('https://C:/Users/gayah/Documents/ClickyGame/testapp/public/images');
//   const response = await request.json();
//   return response.images
// }

const images = [
  { id: 1, src: 'public/images/familyguy1.png' },
  { id: 2, src: './public/images/familyguy2.png' },
  { id: 3, src: '../public/images/familyguy3.png' },
  { id: 4, src: './../public/images/familyguy4.png' },
  { id: 5, src: '../../public/images/familyguy5.png' },
  { id: 6, src: '../../public/images/americandad1.png' },
  { id: 7, src: '../../public/images/americandad2.png' },
  { id: 8, src: '../../public/images/americandad3.png' },
  { id: 9, src: '../../public/images/americandad4.png' },
  { id: 10, src: '../../public/images/americandad5.png' },
  { id: 11, src: '../../public/images/cleveland1.png' },
  { id: 12, src: '../../public/images/cleveland2.png' },
];

// function imageLoader() {
//   return images;
// }

export default images;
