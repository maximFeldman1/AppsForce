import styled from "styled-components";

const WrapFilters = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 10px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export { WrapFilters };
