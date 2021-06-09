import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 1rem 2rem;
`;

const Button = styled.button`
  background: #f18806;
  box-shadow: 2px 2px 4px #000000;
  border: none;
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-left: ${(props) => (props.level ? "1rem" : "none")};
  margin-bottom: 1rem;
`;

const GridCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 480px) {
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  width: 100%;
  cursor: pointer;
`;

const ImgBack = styled.img`
  width: 100%;
  opacity: ${(props) => (props.disableImages ? "0.8" : "initial")}; ;
`;

export { Container, Button, GridCards, Card, ImgBack };
