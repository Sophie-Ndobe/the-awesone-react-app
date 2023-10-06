import React from "react";
import "./CitiesPanel.css";

export default function CitiesPanel() {
  return (
    <div className="CitiesPanel">
      <div className="row mt-2 mb-2">
        <div className="col-2">
          <a href="/">Pretoria</a>
        </div>
        <div className="col-2">
          <a href="/">Athens</a>
        </div>
        <div className="col-2">
          <a href="/">Houston</a>
        </div>
        <div className="col-1">
          <a href="/">Jerusalem</a>
        </div>
      </div>
    </div>
  );
}
