import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Hello/>, root);
});
