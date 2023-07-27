import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBox = () => {
  return (
    <>
      <Form.Control type="text" placeholder="연락처 검색" />
      <Button>찾기</Button>
    </>
  );
};

export default SearchBox;
