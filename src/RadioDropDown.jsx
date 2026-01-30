import React, { useState } from "react";

const RadioDropDown = () => {
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  return (
    <div>
      <h1>RadioDropDown</h1>
      <h1>Select Your Gender</h1>
      <h1>SELECTED GENDER:{gender}</h1>
      <input
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        id="male"
        name="gender"
        value={"male"}
        checked={gender == "male"}
      />
      <label htmlFor="male">Male</label>
      <br />
      <br />
      <input
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        id="female"
        name="gender"
        value={"female"}
        checked={gender == "female"}
      />
      <label htmlFor="female">Female</label>
      <br />
      <br />
      <h1>SELECT CITY</h1>

      <select onChange={(e) => setCity(e.target.value)} defaultValue="nwg">
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
        <option value="nwg">Nwg</option>
      </select>
      <h1>Selected City:{city}</h1>
    </div>
  );
};

export default RadioDropDown;
