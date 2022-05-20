import React from "react";
import * as S from "./Styles";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { GlobalStorage } from "../../Hook/GlobalContext";
import semFoto from "../../assets/sem_foto.png";

import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Home = () => {
  const [inputWork, setInputWork] = React.useState(true);
  const [listaApi, setListaApi] = React.useState([]);
  const [imgCarrousel, setImgCarrousel] = React.useState(
    "https://static.tvmaze.com/uploads/images/original_untouched/407/1019370.jpg"
  );
  const {
    valueInputSearch,
    listaFetchContext,
    retornarListaApi,
    setSerieEscolhida,
  } = React.useContext(GlobalStorage);

  const refCarrousel = React.useRef(null);
  function ativarButton() {
    refCarrousel.current.childNodes.forEach((element, index) => {
      element.addEventListener("mouseover", () => {
        element.children[0].children[0].style.display = "block";
        element.children[0].style.display = "block";
        setImgCarrousel(element.children[1].src);
      });
    });
  }

  function desativarButton() {
    refCarrousel.current.childNodes.forEach((element, index) => {
      element.addEventListener("mouseout", () => {
        element.children[0].children[0].style.display = "none";
        element.children[0].style.display = "none";
      });
    });
  }

  React.useEffect(() => {
    retornarListaApi("Moon");
  }, []);

  React.useEffect(() => {
    //https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes para retornar episódios, com name, image, numero, etc....
    ativarButton();

    async function retornarListaApi() {
      const jsonList = await fetch(
        `https://api.tvmaze.com/search/shows?q=${
          valueInputSearch || "the good"
        }`
      ).then((response) => response.json());
      setListaApi(jsonList.map((response) => response.show));

      if (valueInputSearch === "") {
        setInputWork(false);
      } else {
        setInputWork(true);
      }
    }
    retornarListaApi();
  }, [valueInputSearch, inputWork]);

  function leftCarrousel() {
    refCarrousel.current.scrollLeft -= refCarrousel.current.offsetWidth;
  }
  function rightCarrousel() {
    refCarrousel.current.scrollLeft += refCarrousel.current.offsetWidth;
  }

  return (
    <S.Main inputWork={inputWork} imgCarrousel={imgCarrousel}>
        <main>
        <Header />
        <ul className="animeMenuDropDown animeDown">
          {listaApi &&
            listaApi.map((show) => (
              <li key={show.id}>
                <img
                  onClick={({ target }) => setSerieEscolhida(show.name)}
                  src={show.image === null ? semFoto : show.image.medium}
                  alt="Foto da série"
                />
                <p onClick={({ target }) => setSerieEscolhida(show.name)}>
                  {show.name}
                </p>
              </li>
            ))}
        </ul>
        <section className="titleSerie">
          <h1>THE MOON KNIGHT</h1>
          <div className="information">
            <p>Uma série ABC</p>
            <p>7.7</p>
            <p>2017 - Até o Commit</p>
          </div>
          <Button caminhoLink="/home" texto="Mais Detalhes" />
        </section>

        <section className="sectionDown">
          <h2>Mais Séries</h2>
          <div className="carrouselInformation">
            <ul ref={refCarrousel}>
              {listaFetchContext &&
                listaFetchContext.map((show) => (
                  <li key={show.id} onMouseOut={desativarButton}>
                    <div className="backButton animeDiv">
                      <Button caminhoLink="/home" texto="Mais detalhes +" />
                    </div>
                    <img
                      className="tes"
                      src={show.image === null ? semFoto : show.image.original}
                      alt="Foto da série"
                    />
                  </li>
                ))}
            </ul>
          </div>
          <div className="arrowsCarrousel">
            <BsArrowLeftCircleFill onClick={leftCarrousel} />
            <BsArrowRightCircleFill onClick={rightCarrousel} />
          </div>
        </section>
    </main>
      </S.Main>
  );
};

export default Home;
