import styled from "styled-components";
export const NavUnlisted = styled.ul`
  display: flex;
  align-items: center;
  background-color: black;
  margin: 0 0 -5px;
  padding: 10px;
  flex-direction: row-reverse;
  justify-content: space-between;
  .active {
    border-bottom: 2px solid black;
  }
`;
