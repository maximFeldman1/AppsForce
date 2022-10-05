import styled from "styled-components";

const Container = styled.div`
  // background-color: #c0c0c0cf;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  column-gap: 10px;
  row-gap: 30px;
  margin: 0 10px;
  border-radius: 15px;
`;

export { Container };
