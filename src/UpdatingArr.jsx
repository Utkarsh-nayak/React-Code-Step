import React, { useState } from "react";

function UpdatingArr() {
  const [data, setData] = useState(["dada", "dadi", "didi"]);

  const [details, setDetails] = useState([
    { name: "anil", age: "30" },
    { name: "babu", age: "33" },
    { name: "singh", age: "35" },
  ]);
  const handleArr = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setData([...data]);
  };
  // const handleAge = (value) => {
  //   const newDetails = [...details];
  //   newDetails[newDetails.length - 1] = {
  //     ...newDetails[newDetails.length - 1],
  //     age: value,
  //   };
  //   setDetails(newDetails);
  // };

  const handleAge = (age) => {
    details[details.length - 1].age = age;
    setDetails([...details]);
  };
  return (
    <div>
      <h1>updatingArr</h1>
      <h1>
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </h1>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => handleArr(e.target.value)}
      />
      <hr />
      <hr />
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => handleAge(e.target.value)}
      />
      <h3>
        {details.map((item, index) => (
          <h3 key={index}>
            {item.name},{item.age}
          </h3>
        ))}
      </h3>
    </div>
  );
}

export default UpdatingArr;
