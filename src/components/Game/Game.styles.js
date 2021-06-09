import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem 2rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem 3rem;
  }
`;

const Card = styled.div`
  width: 100%;
  cursor: pointer;
`;

const ImgBack = styled.img`
  width: 100%;
`;

export { Container, Card, ImgBack };
