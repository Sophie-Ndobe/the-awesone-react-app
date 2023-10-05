import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="Search" />
        <button className="btn btn-primary">Search</button>
        <button className="btn btn-success">Current</button>
      </form>
    </div>
  );
}
