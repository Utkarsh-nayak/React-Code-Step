import React, { useState } from "react";

function UpdtingObj() {
  const [name, setname] = useState("utkarsh");

  const [data, setData] = useState({
    name: "dada",
    address: {
      city: "nowgong",
      country: "india",
    },
  });
  const updateName = (val) => {
    data.name = val;
    console.log(data);
    setData({ ...data });
  };

  const handleCity = (city) => {
    data.address.city = city;
    console.log(data);
    setData({ ...data, address: { ...data.address, city } });
  };
  return (
    <div>
      <h1>UpdtingObj</h1>
      <h1>{name}</h1>
      <input type="text" onChange={(event) => updateName(event.target.value)} />
      <br />
      <input type="text" onChange={(event) => handleCity(event.target.value)} />
      <hr></hr>
      <h2>{data.name}</h2>
      <h2>{data.address.city}</h2>
      <h2>{data.address.counrty}</h2>
    </div>
  );
}

export default UpdtingObj;
