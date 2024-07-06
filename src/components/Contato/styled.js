import styled from "styled-components";



export const Div = styled.div`
  border-radius: 4px;
  width: 500px;
  display: block;
  align-items: center;
  margin: 8px 0 8px 0;
  background-color: #cce6ff;
  border: 1px solid black;
`;
export const Li = styled.li`
  width: 80%;


`;
export const Input = styled.input`
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  display: block;
  width: 95%;
  color: #003366;
  background-color: #ffff;
  border: 0px solid #004080;

  padding: 4px;
  margin: 8px;
`;

export const Button = styled.button`
  border-radius: 4px;
  margin: 8px;
  transition: 0.5s;
  color: #003366;
  background-color: #ffff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0080ff;
  }
`;
