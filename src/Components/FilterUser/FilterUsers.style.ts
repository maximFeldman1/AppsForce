import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
   div {
    padding: 5px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export { Form };
