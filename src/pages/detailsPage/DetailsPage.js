import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import {
  Container,
  Headers,
  LogoImage,
  BackImage
} from "../homePage/Style";
import {ImgDetails, PowerDetails, SuperPowerDetails, SuperPowerDetailsMini} from "./Style";
import {  goToBack,  goToHomePage } from "../../routes/Coordinator";
import Logo from "../../img/pokelogo.png";
import ButtonBack from "../../img/voltar.png";
import { BASE_URL } from "../../constants/Constants";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  TypeAndMovesContainer,
  PokeInfosContainer,
  ImgWrapper,
  ImagesContainer,
  StatsContainer,
  TitleContainer,
  TypesContainer,
  MovesContainer
} from "./Style";
import useHistory from "use-history";


const DetailsPage = () => {
      const { name, screenPokedex } = useParams();
    const history = useHistory();
    const { pokemons, pokedex } = useContext(GlobalStateContext);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
      let current = [];
      if (screenPokedex) {
        current = pokedex.find((item) => {
          return item.name === name;
        });
      } else {
        current = pokemons.find((item) => {
          return item.name === name;
        });
      }
  
      if (!current) {
        axios
          .get(`${BASE_URL}/pokemon/${name}`)
          .then((res) => setSelectedPokemon(res.data))
          .catch((err) => console.log(err.response.message));
      } else {
        setSelectedPokemon(current);
      }
    }, []);
  
    return (
      <div>
        <Headers leftButtonFunction={() => history.goBack()} showRightButton />
        {selectedPokemon && selectedPokemon.sprites && (
          <Container>
            <ImagesContainer>
              <ImgWrapper src={selectedPokemon.sprites.front_default} />
              <ImgWrapper src={selectedPokemon.sprites.back_default} />
            </ImagesContainer>
            <StatsContainer>
              <TitleContainer>Poderes</TitleContainer>
              {selectedPokemon &&
                selectedPokemon.stats.map((stat) => {
                  return (
                    <p key={stat.stat.name}>
                      <strong>{stat.stat.name}: </strong>
                      {stat.base_stat}
                    </p>
                  );
                })}
            </StatsContainer>
            <TypeAndMovesContainer>
              <TypesContainer>
                {selectedPokemon &&
                  selectedPokemon.types.map((type) => {
                    return <p key={type.type.name}>{type.type.name}</p>;
                  })}
              </TypesContainer>
              <MovesContainer>
                <TitleContainer>Principais ataques</TitleContainer>
                {selectedPokemon &&
                  selectedPokemon.moves.map((move, index) => {
                    return (
                      index < 5 && <p key={move.move.name}>{move.move.name}</p>
                    );
                  })}
              </MovesContainer>
            </TypeAndMovesContainer>
          </Container>
        )}
      </div>
    );
  };
  
  export default DetailsPage;
  
