import React from "react";
import Header from "./Header";
import PhoneNumberCreate from "./PhoneNumberCreate";
import PhoneNumberSearch from "./PhoneNumberSearch";

const PhoneBookWrapper = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "spaceAround" }}>
        <PhoneNumberCreate style={{ width: "50%" }} />
        <PhoneNumberSearch style={{ width: "50%" }} />
      </div>
    </>
  );
};

export default PhoneBookWrapper;
