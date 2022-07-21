import React from "react";
import './Iframe.css';

function Iframe() {
    return (
      <div className="iframe">
        <h1>Live Map of Wars Now</h1>
        <iframe src="https://emmeline.carto.com/viz/b69015da-136a-11e5-a64a-0e43f3deba5a/embed_map" title="Live Map of Wars Now"></iframe>
      </div>
    );
  }
  
  export default Iframe;