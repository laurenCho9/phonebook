import React from "react";

const ContactItem = ({ item }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="" alt="이미지" style={{ width: "50px" }} />
      </div>
      <div>
        <p>{item.name}</p>
        <p>{item.phoneNumber}</p>
      </div>
    </div>
  );
};

export default ContactItem;
