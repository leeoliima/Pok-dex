import styled from "styled-components";

export const ImgDetails = styled.section`
display: flex;
width: 14vw;
height: 25vh;
color: black;
margin: 20px;
padding: 10px;
border-radius: 10px;
border: 2px solid whitesmoke;
box-shadow: 5px 5px 5px lightgray;

img {
    width: 8rem
}

`

export const PowerDetails = styled.section`
width: 24vw;
height: 59vh;
color: black;
margin: 20px;
padding: 10px;
border-radius: 10px;
border: 2px solid whitesmoke;
box-shadow: 5px 5px 5px lightgray;

`
export const SuperPowerDetailsMini = styled.section`
width: 24vw;
height: 9vh;
color: black;
margin: 20px;
padding: 10px;
border-radius: 10px;
border: 2px solid whitesmoke;
box-shadow: 5px 5px 5px lightgray;

`


export const SuperPowerDetails = styled.section`
width: 24vw;
height: 43vh;
color: black;
margin: 20px;
padding: 10px;
border-radius: 10px;
border: 2px solid whitesmoke;
box-shadow: 5px 5px 5px lightgray;

`


export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  height: 25vh;
  
`;

export const StatsContainer = styled.div`
  
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
 
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;
