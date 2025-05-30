import React from "react";
import ReactDOM, { render } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import { HelmetProvider } from 'react-helmet-async';

/**
* Root of react site 
*
* Imports Helmet provider for the page head
* And App which defines the content and navigation
*/

// Render the site https://reactjs.org/docs/react-dom.html#render
const container = document.getElementById("root"); const root = createRoot(container);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
