import React from "react";
import statesData from "./States.json";
import useFormContext from "../hooks/useFormContext";

const Billing = () => {
  const { data, handleChange } = useFormContext();
  
  const stateOptions = Object.keys(statesData).map((stateName) => (
    <option key={stateName} value={stateName}>
      {stateName}
    </option>
  ));
  

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="billFirstName">First Name</label>
          <input
            type="text"
            id="billFirstName"
            name="billFirstName"
            placeholder="Atul"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.billFirstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-col">
          <label htmlFor="billLastName">Last Name</label>
          <input
            type="text"
            id="billLastName"
            name="billLastName"
            placeholder="Tingre"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.billLastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <label htmlFor="billAddress1">Address</label>
      <input
        type="text"
        id="billAddress1"
        name="billAddress1"
        placeholder="Kabra Nager Road"
        pattern="[\w\d\s.#]{2,}"
        value={data.billAddress1}
        onChange={handleChange}
      />
      <input
        type="text"
        id="billAddress2"
        name="billAddress2"
        placeholder="House No. 26"
        pattern="[\w\d\s.#]{2,}"
        value={data.billAddress2}
        onChange={handleChange}
      />
      <label htmlFor="billCity">City</label>
      <input
        type="text"
        id="billCity"
        name="billCity"
        placeholder="Nanded"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.billCity}
        onChange={handleChange}
      />
      <label htmlFor="billState">State</label>
      <select
        name="billState"
        id="billState"
        value={data.billState}
        onChange={handleChange}>
        <option value={stateOptions}>Select a state</option>
        {stateOptions}
      </select>
      <label htmlFor="billZipCode">Zip Code</label>
      <input
        type="text"
        id="billZipCode"
        name="billZipCode"
        placeholder="431605"
        pattern="[0-9]{6}"
        maxLength="6"
        value={data.billZipCode}
        onChange={handleChange}
      />
    </div>
  );
  return content;
};

export default Billing;
