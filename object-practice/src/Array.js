import React from "react";

function Array() {
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

  return (
    <div className="looped-arr-names">
      <ul>
        {Arr.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Array;
