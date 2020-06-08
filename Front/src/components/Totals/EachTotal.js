import React from "react";
import styled from "styled-components";

const EachTotal = ({ id, amount }) => {
  return (
    <Wrapper>
      <div>{id}</div>
      <div>{amount}</div>
    </Wrapper>
  );
};

export default EachTotal;

const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-between; */

  background: red;
`;
