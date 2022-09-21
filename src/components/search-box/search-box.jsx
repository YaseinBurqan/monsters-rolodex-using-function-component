import React from "react";
import "./search-box.css";

function SearchBox(props) {
  const { type, onChangeHandler, placeholder, className } = props;

  return (
    <>
      <div className="card-list">
        <input type={type} className={className} placeholder={placeholder} onChange={onChangeHandler} />
      </div>
    </>
  );
}

export default SearchBox;
