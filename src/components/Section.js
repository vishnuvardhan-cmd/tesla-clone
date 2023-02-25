import React from "react";
import Styled from "styled-components";

const Section = ({model,desc,image,left,right}) => {
  return (
    <Wrap style={{ backgroundImage: 'url("'+image+'")'}}>
      <ItemText>
        <h1>{model}</h1>
        <p>{desc}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          {left && <LeftButton>{left}</LeftButton>}
          {right && <RightButton>{right}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;
const Wrap = Styled.div`
height:100vh;
width:100vw;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`;

const ItemText = Styled.div`
padding-top:15vh;
`;

const ButtonGroup = Styled.div`
 display:flex;
//  height:15vh;
 margin-bottom:30px;

 @media (max-width:768px){
    flex-direction:column;
 }

// padding-bottom:1px;
`;

const LeftButton = Styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
font-size:12px;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
cursor:pointer;
margin:8px;
`;

const RightButton = Styled(LeftButton)`
background:white;
color:black;
opacity:0.65;
`;

const Buttons = Styled.div`
// display:flex;
// flex-direction:column;
// justify-content:space-between;
// align-items:center;
`;

const DownArrow = Styled.img`
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`;
// const Wrap = Styled.div`
// height:100vh;
// width:100vw;
// background-image:url('/images/audio.jpg');

// `;

// const ItemText = Styled.div`

// padding-top:15vh;
// `;

// const ButtonGroup=Styled.div`
// display:flex;
// `
// const LeftButton=Styled.div`
// background-color:rgba(23,26,32,0.8);
// height:40px;
// width:256px;
// color:white;
// display:flex;
// justify-content:center;
// align-items:center;
// border-radius:100px;
// opacity:0.85
// text-transform:uppercase;
// font-size:12px;
// `

// const RightButton=Styled(LeftButton)`

// `
