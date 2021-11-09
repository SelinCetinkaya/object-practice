import React from "react";

function Array({ setHeaderName }) {
  const Arr = [
    {
      name: "selin",
    },
    {
      name: "sage",
    },
    {
      name: "oliver",
    },
    {
      name: "pazuzu",
    },
  ];

  const handleClick = (e) => {
    console.log(e.target.firstChild.data);
    setHeaderName(e.target.firstChild.data);
  };

  return (
    <div className="looped-arr-names">
      <ul>
        {Arr.map((el) => (
          <li onClick={handleClick}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Array;
