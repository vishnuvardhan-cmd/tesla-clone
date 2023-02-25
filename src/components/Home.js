import React from "react";
import Styled from "styled-components";
import Section from "./Section";
import Data from "./data.json";
const Home = () => {
  return <Container>
    {
        Data.map(data=>(<Section model={data.model} desc={data.desc} image={data.image} left={data.left} right={data.right}/>))
    }
  </Container>;
};

export default Home;

const Container = Styled.div`
height:100vh;
`;
