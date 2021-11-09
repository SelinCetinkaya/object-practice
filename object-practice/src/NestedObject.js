import React from "react";

function NestedObject({ setHeaderName }) {
  const obj = {
    person1: {
      name: "cetinkaya",
    },
    person2: {
      name: "mcgill",
    },
    person3: {
      name: "peterson",
    },
  };

  const objArr = Object.values(obj);

  const handleClick = (e) => {
    console.log(e.target.firstChild.data);
    setHeaderName(e.target.firstChild.data);
  };

  return (
    <div className="looped-obj-names">
      <ul>
        {objArr.map((el) => (
          <li onClick={handleClick}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NestedObject;
