import React from "react";
import * as S from "./Styles";
import { GlobalStorage } from "../../../Hook/GlobalContext";
import Header from "../../Header/Header";
import iconStar from "../../../assets/iconStar.svg";
import { RETORNAR_DETAILS } from "../../../API";

const HomeMovie = () => {
  const { serieEscolhida, retornarListaApi } = React.useContext(GlobalStorage);
  const [detailsMovie, setDetailsMovie] = React.useState([]);
  const [nameCompanie, setNameCompanie] = React.useState();
  const [generoMovie, setGeneroMovie] = React.useState();

  React.useEffect(() => {
    retornarListaApi()
    const { url } = RETORNAR_DETAILS(serieEscolhida);
    async function detailsMovies() {
      const jsonList = await fetch(url).then((res) => res.json());
      setDetailsMovie(jsonList);
      const detailsCompanie = await jsonList.production_companies.map(
        (res) => res
        );
        const generoMovie = await jsonList.genres.map((res) => res);
      setGeneroMovie(generoMovie);
      setNameCompanie(detailsCompanie[0].name);
    }
    detailsMovies();
  }, []);
  
  return (
    <S.MainHome2
      backImage={
        detailsMovie.backdrop_path === undefined
          ? "/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg"
          : detailsMovie.backdrop_path
      }
    >
      <main>
        <Header />
        <section className="informationMovie">
          <h1>
            {detailsMovie.name === undefined
              ? "Halo"
              : detailsMovie.name}
          </h1>
          <div className="subInformation">
            <p>{nameCompanie === undefined ? "Amblin Television" : nameCompanie}</p>
            <p>
              <img src={iconStar} alt="icone de estrela" />
              {detailsMovie.vote_average === undefined
                ? "8.2"
                : detailsMovie.vote_average}
            </p>
            <p>
              {detailsMovie.first_air_date === undefined
                ? 2022
                : detailsMovie.first_air_date.substring(0, 4)}
            </p>
          </div>
          <h2>
            {generoMovie === undefined
              ? "Action & Adventure"
              : generoMovie[0].name}
          </h2>
          <div className="containerSinopse">
          <p className="sinopse">{detailsMovie.overview === undefined ? 'Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.' : detailsMovie.overview}</p>
          </div>
        </section>
      </main>
    </S.MainHome2>
  );
};

export default HomeMovie;
