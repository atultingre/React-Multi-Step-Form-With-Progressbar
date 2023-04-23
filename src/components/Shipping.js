import React from "react";
import useFormContext from "../hooks/useFormContext";
import statesData from "./States.json";

const Shipping = () => {
  const { data, handleChange } = useFormContext();
  const stateOptions = Object.keys(statesData).map((stateName) => (
    <option key={stateName} value={stateName}>
      {stateName}
    </option>
  ));

  const content = (
    <>
      <label htmlFor="sameAsBilling">
        <input
          type="checkbox"
          id="sameAsBilling"
          name="sameAsBilling"
          checked={data.sameAsBilling}
          onChange={handleChange}
        />
        same as Billing Address
      </label>
      <div className="split-container">
        <div className="flex-col">
          <label htmlFor="shipFirstName">First Name</label>
          <input
            type="text"
            id="shipFirstName"
            name="shipFirstName"
            placeholder="Atul"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.shipFirstName}
            onChange={handleChange}
            disabled={data.sameAsBilling}
          />
        </div>
        <div className="flex-col">
          <label htmlFor="shipLastName">Last Name</label>
          <input
            type="text"
            id="shipLastName"
            name="shipLastName"
            placeholder="Tingre"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.shipLastName}
            onChange={handleChange}
            disabled={data.sameAsBilling}
          />
        </div>
      </div>
      <label htmlFor="shipAddress1">Address</label>
      <input
        type="text"
        id="shipAddress1"
        name="shipAddress1"
        placeholder="Kabra Nager Road"
        pattern="[\w\d\s.#]{2,}"
        value={data.shipAddress1}
        onChange={handleChange}
        disabled={data.sameAsBilling}
      />
      <input
        type="text"
        id="shipAddress2"
        name="shipAddress2"
        placeholder="House No. 26"
        pattern="[\w\d\s.#]{2,}"
        value={data.shipAddress2}
        onChange={handleChange}
        disabled={data.sameAsBilling}
      />
      <label htmlFor="shipCity">City</label>
      <input
        type="text"
        id="shipCity"
        name="shipCity"
        placeholder="Nanded"
        pattern="([A-Z])[\w\s.]{1,}"
        value={data.shipCity}
        onChange={handleChange}
        disabled={data.sameAsBilling}
      />
      <label htmlFor="shipState">State</label>
      <select
        name="shipState"
        id="shipState"
        value={data.shipState}
        onChange={handleChange}
        disabled={data.sameAsBilling}
        >
        <option value={stateOptions}>Select a state</option>
        {stateOptions}
      </select>
      <label htmlFor="shipZipCode">Zip Code</label>
      <input
        type="text"
        id="shipZipCode"
        name="shipZipCode"
        placeholder="431605"
        pattern="[0-9]{6}"
        maxLength="6"
        value={data.shipZipCode}
        onChange={handleChange}
        disabled={data.sameAsBilling}
      />
    </>
  );
  return content;
};

export default Shipping;
