import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  margin-left: 0;
`;

function LinkList() {
  return (
    <UL>
      <li>About</li>
      <li>Archive</li>
      <li>Contact</li>
    </UL>
  );
}

export default LinkList;
